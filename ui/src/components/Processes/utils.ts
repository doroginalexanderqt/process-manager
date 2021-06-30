import { JobStatus } from '../../types'
import { BadgeProps } from 'antd'

export const JobStatusToComponentStatus: { [statusKey: string]: BadgeProps['status'] } = {
    [JobStatus.running]: 'processing',
    [JobStatus.failed]: 'error',
    [JobStatus.succeed]: 'success',
}
