import { Process } from '../../../types'
import moment from 'moment'

export const StartTime = (process: Process) =>
    moment(process.startTime).format('YYYY-MM-DD:hh:mm:ss')

