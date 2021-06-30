import { createSelector } from 'reselect'
import { Store } from '../reducers'
import { getProcessStatus } from './utils'

export const getProcessesWithJobs = createSelector((state: Store) => (
    { processes: state.processes, jobs: state.jobs }),
    ({ processes, jobs }) => processes.data.map((process) => {
        const processJobs = jobs.data.filter(({ processId }) => processId === process.id)

        return ({
            ...process,
            jobs: processJobs,
            status: getProcessStatus(processJobs)
        })
    })
)
