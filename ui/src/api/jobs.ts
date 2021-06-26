import axios from 'axios'
import { apiUrl } from '../constantValues'

export default {
    getJobs: () => axios.get(`${apiUrl}/jobs`),
}
