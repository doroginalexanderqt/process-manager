import axios from 'axios'
import { apiUrl } from '../constantValues'

export const jobs = {
    get: () => axios.get(`${apiUrl}/jobs`),
}
