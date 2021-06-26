import axios from 'axios'
import { apiUrl } from '../constantValues'

export default {
    getProcesses: () => axios.get(`${apiUrl}/processes`),
}
