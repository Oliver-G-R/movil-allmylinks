import axios from 'axios'
import {URL_API_DEV, URL_API_PROD} from "@env"


const urlApi =  __DEV__ ? URL_API_DEV : URL_API_PROD

export const linksApi = axios.create({
    baseURL: urlApi
})
