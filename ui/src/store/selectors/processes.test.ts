import { cloneDeep } from 'lodash'
import { Store } from '../reducers'
import { JobStatus } from '../../types'
import { getProcessesWithJobs } from './processes'

const store: Store = {
    loaders: {},
    jobs: {
        data: [{
            id: 'job1',
            name: 'job1',
            status: JobStatus.succeed,
            processId: 'process1'
        }, {
            id: 'job_without_process',
            name: 'job_without_process',
            status: JobStatus.failed,
            processId: 'job_without_process'
        }],
    },
    processes: {
        data: [{
            id: 'process1',
            name: 'process1',
            startTime: 0,
            jobsCount: 1
        }]
    }

}
describe('processes selector', () => {
    test('getProcessesWithJobs should provide processes with jobs with correct processIds', () => {
        const processesWithJobs = getProcessesWithJobs(cloneDeep(store))

        expect(processesWithJobs[0].jobsCount).toEqual(1)
        expect(processesWithJobs[0].jobs).toEqual([store.jobs.data[0]])
    })
    test('getProcessesWithJobs should provide processes with correct status', () => {
        const clonedStore = cloneDeep(store)

        expect(getProcessesWithJobs(clonedStore)[0].status).toEqual(JobStatus.succeed)

        clonedStore.jobs.data.push({
            id: 'jobWithRunningStatus',
            processId: 'process1',
            status: JobStatus.running,
            name: ''
        })
    })
})
