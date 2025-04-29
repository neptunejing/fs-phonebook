import axios from "axios";

// server on Render
const isLocalhost = window.location.hostname === "localhost";

const baseUrl = isLocalhost
  ? "http://127.0.0.1:3001/api/persons"
  : "https://phonebook-backend-cool-glitter-662.fly.dev/api/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (newObject) => {
  return axios
    .post(baseUrl, newObject)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data?.error || error.message;
    });
};

const deleteById = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

const update = (newObject) => {
  return axios
    .put(`${baseUrl}/${newObject.id}`, newObject)
    .then((response) => response.data);
};

export default { getAll, create, deleteById, update };
