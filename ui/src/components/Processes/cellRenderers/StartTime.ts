import { Process } from '../../../types'
import moment from 'moment'

export const StartTime = (startTime: Process['startTime']) =>
    moment(startTime).format('YYYY-MM-DD:hh:mm:ss')

