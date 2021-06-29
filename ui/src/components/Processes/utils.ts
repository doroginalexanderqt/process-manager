import {EnrichedProcess} from './types'
import {countBy} from 'lodash'
import {Job, JobStatus, Process} from '../../types'
import { BadgeProps } from 'antd'

export const getProcessesWithJobs = (processes: Process[], jobs: Job[]): EnrichedProcess[] =>
    processes.map((process) => ({
        ...process,
        jobs: jobs.filter(({ processId }) => process.id),
        status: getProcessStatus(jobs)
    }))

const getProcessStatus = (jobs: Job[]) => {
    const { running, failed } = countBy(jobs, 'status')

    if (running > 0) {
        return JobStatus.running
    }
    if (failed > 0) {
        return JobStatus.failed
    }

    return JobStatus.succeed
}

export const JobStatusToComponentStatus: { [statusKey: string]: BadgeProps['status'] } = {
    [JobStatus.running]: 'processing',
    [JobStatus.failed]: 'error',
    [JobStatus.succeed]: 'success',
}
