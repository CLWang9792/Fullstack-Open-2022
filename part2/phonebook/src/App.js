import { useEffect, useState } from 'react'
import {
  Filter,
  PersonsForm,
  Persons,
  SuccessNotification,
  ErrorNotification,
} from './components/Note'
import { getAll, create, update } from './services/note'
import './index.css'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([])
  const [filterData, setFilterData] = useState([])
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    getAll().then(response => setPersons(response.data))
  }, [])

  const handleFilter = event => {
    const searchWord = event.target.value
    const newFilter = persons.filter(value => {
      return value.name
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase())
    })
    if (searchWord === '') {
      setFilterData([])
      setSearch('')
    } else {
      setFilterData(newFilter)
      setSearch('have search word')
    }
  }
  const handleNameChange = event => {
    setNewName(event.target.value)
  }
  const handleNumberChange = event => {
    setNewNumber(event.target.value)
  }

  const add = event => {
    event.preventDefault()
    const phoneBookObject = {
      name: newName,
      number: newNumber,
      Date: new Date(),
      id: Math.floor(Math.random() * Math.pow(2, 52)),
    }
    const personIdex = persons.findIndex(x => x.name === newName)

    if (personIdex !== -1) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with new one?`
        )
      ) {
        const personId = persons[personIdex].id
        const upDate = {
          name: newName,
          number: newNumber,
          Date: new Date(),
          id: personId,
        }
        update(personId, upDate).then(response => {
          setPersons(
            persons.map(persons =>
              persons.name !== newName ? persons : response.data
            )
          )
          setSuccessMessage(`${newName}'s number has been updated`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
      }
    } else {
      create(phoneBookObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setSuccessMessage(`Added ${newName}`)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error.response.data)
          if (newName === '' || newNumber === '') {
            setErrorMessage(`Name and Number cannot be blank`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          } else {
            setErrorMessage(`Wrong Format`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          }
        })
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    //需要添加輸入名字、號碼的格式
    <div>
      <h1>Phonebook</h1>
      <SuccessNotification message={successMessage} />
      <ErrorNotification message={errorMessage} />
      <Filter handleFilter={handleFilter} />
      <h3>Add a new</h3>
      <PersonsForm
        add={add}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterData={filterData} search={search} />
    </div>
  )
}
export default App
