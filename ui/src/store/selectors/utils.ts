import { countBy } from 'lodash'
import { Job, JobStatus } from '../../types'

export const getProcessStatus = (jobs: Job[]) => {
    const { succeed, running } = countBy(jobs, 'status')

    if (running > 0) {
        return JobStatus.running
    }

    if (succeed === jobs.length) {
        return JobStatus.succeed
    }

    return JobStatus.failed
}
