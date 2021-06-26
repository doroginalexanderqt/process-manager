import { createAction } from 'redux-actions'

export const fetchJobs = createAction('FETCH_JOBS')
export const fetchJobsSucceed = createAction('FETCH_JOBS_SUCCEED')
export const fetchJobsFailed = createAction('FETCH_JOBS_FAILED')

export const fetchProcess = createAction('FETCH_PROCESS')

export const fetchProcessSucceed = createAction('FETCH_PROCESS_SUCCEED')
export const fetchProcessFailed = createAction('FETCH_PROCESS_FAILED')

export const updateLoader = createAction('UPDATE_LOADER')
