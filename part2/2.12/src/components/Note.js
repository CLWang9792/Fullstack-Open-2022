import React from "react";

const Button = ({ filterData }) => {
  console.log("click");
  const detail = () => {
    console.log("detail run");
    return (
      <p>123</p>
      // <div>
      //   {filterData.map((filterData) => (
      //     <div key={filterData.name.common}>
      //       <h1>{filterData.name.common}</h1>
      //       <div>
      //         <p>Capital: {filterData.capital}</p>
      //         <p>Area: {filterData.area}</p>
      //       </div>
      //       <div>
      //         <h3>Languages:</h3>
      //       </div>
      //       {filterData.flag}
      //     </div>
      //   ))}
      // </div>
    );
  };
  return <button onClick={detail}>show</button>;
};

const Detail = ({ filterData }) => {
  console.log("detail run");
  return (
    <div>
      {filterData.map((filterData) => (
        <div key={filterData.name.common}>
          <h1>{filterData.name.common}</h1>
          <div>
            <p>Capital: {filterData.capital}</p>
            <p>Area: {filterData.area}</p>
          </div>
          <div>
            <h3>Languages:</h3>
          </div>
          {filterData.flag}
        </div>
      ))}
    </div>
  );
};

const Show = ({ filterData }) => {
  if (filterData.length > 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  } else if (filterData.length === 1) {
    const languages = Object.values(filterData[0].languages);
    console.log(languages[0]);
    return (
      <div>
        {filterData.map((filterData) => (
          <div key={filterData.name.common}>
            <h1>{filterData.name.common}</h1>
            <div>
              <p>Capital: {filterData.capital}</p>
              <p>Area: {filterData.area}</p>
            </div>
            <div>
              <h3>Languages:</h3>
            </div>
            {filterData.flag}
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
            <Button />
          </li>
        ))}
      </ul>
    );
  }
};

const Filter = ({ handleFilter, filterData }) => {
  return (
    <div>
      find countries
      <input placeholder="Search ..." onChange={handleFilter} />
      <Show filterData={filterData} />
    </div>
  );
};

export { Filter };
