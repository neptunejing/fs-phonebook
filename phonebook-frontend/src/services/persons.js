import axios from 'axios';

// server on Render
const baseUrl = 'https://phonebook-backend-cool-glitter-662.fly.dev/api/persons';

const getAll = () => {
	return axios.get(baseUrl).then((response) => response.data);
};

const create = (newObject) => {
	return axios.post(baseUrl, newObject).then((response) => response.data);
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
