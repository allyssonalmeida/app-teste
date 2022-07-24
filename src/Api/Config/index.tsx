import axios from 'axios';

const BaseAPI = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Content-type': 'application/json'
  },
});

export default BaseAPI;