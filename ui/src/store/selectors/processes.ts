import { createSelector } from 'reselect'
import { Store } from '../reducers'
import { getProcessStatus } from './utils'
import { Process } from '../../types'

const mapProcessJobsStatus = (jobs: Store['jobs'], search?: string) => (process: Process) => {
    const processJobs = jobs.data.filter(({ processId }) => processId === process.id)

    return ({
        ...process,
        jobs: search
            ? processJobs.filter(({ name }) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            : processJobs,
        status: getProcessStatus(processJobs)
    })
}

export const getProcessesWithJobs = createSelector((state: Store) => (
    { processes: state.processes, jobs: state.jobs }),
    ({ processes, jobs }) => {
        if (!jobs.search) {
            return processes.data.map(mapProcessJobsStatus(jobs))
        }

        const processIds = jobs.data
            .filter(job => job.name.toLocaleLowerCase().includes(jobs.search.toLocaleLowerCase()))
            .map(({ processId }) => processId)

        return processes.data
            .filter(({ id }) => processIds.includes(id))
            .map(mapProcessJobsStatus(jobs, jobs.search))
    }
)
