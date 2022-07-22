import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const delData = (persons, setErrorMessage) => {
  return axios
    .delete(`${baseUrl}/${persons.id}`)
    .catch((error) => {
      setErrorMessage(`${persons.name} was already remove`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 1000);
    })
    .then(
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    );
};

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (phoneBookObject) => {
  return axios.post(baseUrl, phoneBookObject);
};

const update = (id, update) => {
  return axios.put(`${baseUrl}/${id}`, update);
};

export { delData, getAll, create, update };
