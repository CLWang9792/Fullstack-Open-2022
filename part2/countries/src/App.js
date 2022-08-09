import { useEffect, useState } from 'react'
import axios from 'axios'
import { Filter } from './components/Note'
import './index.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterData, setFilterData] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const weather_api_key = process.env.REACT_APP_WEATHER_API_KEY
  let capital = 'London'
  let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${weather_api_key}&units=metric`

  if (filterData.length === 1) {
    capital = Object.values(filterData[0].capital)[0]
    weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${weather_api_key}&units=metric`
  }

  useEffect(() => {
    axios.get(weatherApiUrl).then(response => {
      setWeatherData(response.data)
    })
  }, [weatherApiUrl])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleFilter = event => {
    const searchWord = event.target.value
    const newFilter = countries.filter(value => {
      return value.name.common
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase())
    })

    if (searchWord === '') {
      setFilterData([])
    } else {
      setFilterData(newFilter)
    }
  }

  return (
    <div>
      <Filter
        handleFilter={handleFilter}
        filterData={filterData}
        weatherData={weatherData}
      />
    </div>
  )
}
export default App
