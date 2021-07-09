import { handleActions } from 'redux-actions'
import { Job } from '../../../types'
import {fetchJobsFailed, fetchJobsSucceed, searchJob} from '../../actions'

export default handleActions<{ data: Job[], error: Error | null, search: string }>(
    // @ts-ignore FIXME
    {
        [fetchJobsSucceed.toString()]: (
            state,
            { payload }
         ) => ({...state, data: payload.data }),
        [fetchJobsFailed.toString()]: (
            state,
            { payload }
         ) => ({...state, error: payload.error }),
        [searchJob.toString()]: (
            state,
            { payload }
         ) => ({...state, search: payload }),
    },
    { data: [], error: null, search: '' }
)
