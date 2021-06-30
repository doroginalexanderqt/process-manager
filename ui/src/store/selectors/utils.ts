import { countBy } from 'lodash'
import { Job, JobStatus } from '../../types'

export const getProcessStatus = (jobs: Job[]) => {
    const { running, failed } = countBy(jobs, 'status')

    if (failed > 0) {
        return JobStatus.failed
    }
    if (running > 0) {
        return JobStatus.running
    }

    return JobStatus.succeed
}
