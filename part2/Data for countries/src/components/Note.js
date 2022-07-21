import React from "react";

const Weather = ({ weatherData }) => {
  const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  return (
    <div>
      <h3>Weather in {weatherData.name}</h3>
      <p>
        temperature {weatherData.main.temp} {"\u2103"}{" "}
        {weatherData.weather[0].main}
      </p>
      <img src={icon} alt="weather icon" />
      <p>wind {weatherData.wind.speed} m/s</p>
    </div>
  );
};

const Show = ({ filterData, weatherData }) => {
  if (filterData.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (filterData.length === 1) {
    const languages = Object.values(filterData[0].languages);

    return (
      <div>
        {filterData.map((filterData) => (
          <div key={filterData.name.common}>
            <h1>{filterData.name.common}</h1>
            <div>
              <p>Capital: {filterData.capital}</p>
              <p>
                Area: {filterData.area} {"\u33A1"}
              </p>
            </div>
            <div>
              <h3>Languages:</h3>
            </div>
            {languages.map((languages, index) => (
              <div key={index}>
                <li>{languages}</li>
              </div>
            ))}
            <div>{filterData.flag}</div>
            <Weather weatherData={weatherData} />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <ul>
        {filterData.map((filterData) => (
          <li key={filterData.name.common}>
            {filterData.name.common}
            {filterData.flag}
          </li>
        ))}
      </ul>
    );
  }
};

const Filter = ({ handleFilter, filterData, weatherData }) => {
  return (
    <div>
      find countries
      <input placeholder="Search ..." onChange={handleFilter} />
      <Show filterData={filterData} weatherData={weatherData} />
    </div>
  );
};

export { Filter };
