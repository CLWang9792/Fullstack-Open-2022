import { useEffect, useState } from "react";
import axios from "axios";
import { Filter } from "./components/Note";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = countries.filter((value) => {
      return value.name.common
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  return (
    <div>
      <Filter handleFilter={handleFilter} filterData={filterData} />
    </div>
  );
};
export default App;
