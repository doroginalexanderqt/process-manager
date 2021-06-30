import axios from 'axios'
import { apiUrl } from '../constantValues'

export const processes = {
    get: () => axios.get(`${apiUrl}/processes`),
    post: () => axios.post(`${apiUrl}/processes`),
}
