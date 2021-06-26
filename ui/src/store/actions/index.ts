import { createAction } from 'redux-actions'

export const fetchJobs = createAction('FETCH_JOBS')
export const fetchJobsSucceed = createAction('FETCH_JOBS_SUCCEED')
export const fetchJobsFailed = createAction('FETCH_JOBS_FAILED')

export const fetchProcesses = createAction('FETCH_PROCESSES')
export const fetchProcessesSucceed = createAction('FETCH_PROCESSES_SUCCEED')
export const fetchProcessesFailed = createAction('FETCH_PROCESSES_FAILED')

export const updateLoader = createAction('UPDATE_LOADER')
