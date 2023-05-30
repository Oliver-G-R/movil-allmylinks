import axios from 'axios'
const prodApi = import.meta.env.VITE_API_URL
const productionMode = import.meta.env.PROD

const urlApi = productionMode ? prodApi : 'http://localhost:3000/all-my-links-api/v1'

export const linksApi = axios.create({
    baseURL: urlApi
})
