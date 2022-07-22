import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const delData = (persons) => {
  return axios
    .delete(`${baseUrl}/${persons.id}`)
    .then(window.location.reload());
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
