import axios from 'axios'
const baseUrl = 'https://mighty-ridge-68591.herokuapp.com/api/persons'

const delData = persons => {
  return axios.delete(`${baseUrl}/${persons.id}`).then(
    setTimeout(() => {
      window.location.reload()
    }, 0)
  )
}

const getAll = () => {
  return axios.get(baseUrl)
}

const create = phoneBookObject => {
  return axios.post(baseUrl, phoneBookObject)
}

const update = (id, update) => {
  return axios.put(`${baseUrl}/${id}`, update)
}

export { delData, getAll, create, update }
