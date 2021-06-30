import { EnrichedProcess } from './types'
import { countBy } from 'lodash'
import { Job, JobStatus, Process } from '../../types'
import { BadgeProps } from 'antd'

export const getProcessesWithJobs = (processes: Process[], jobs: Job[]): EnrichedProcess[] =>
    processes.map((process) => {
        const processJobs = jobs.filter(({ processId }) => processId === process.id)

        return ({
            ...process,
            jobs: processJobs,
            status: getProcessStatus(processJobs)
        })
    })

const getProcessStatus = (jobs: Job[]) => {
    const { running, failed } = countBy(jobs, 'status')

    if (failed > 0) {
        return JobStatus.failed
    }
    if (running > 0) {
        return JobStatus.running
    }

    return JobStatus.succeed
}

export const JobStatusToComponentStatus: { [statusKey: string]: BadgeProps['status'] } = {
    [JobStatus.running]: 'processing',
    [JobStatus.failed]: 'error',
    [JobStatus.succeed]: 'success',
}
