import axios from "axios";

export const BASE_URL =
process.env.REACT_APP_BASE_API_URL || 'https://rickandmortyapi.com/api';



export const rickAndMortyApi = axios.create({
    baseURL:BASE_URL,
  });