import { handleActions } from 'redux-actions'
import { Job } from '../../../types'
import { fetchJobsFailed, fetchJobsSucceed } from '../../actions'
import { Action } from '../types'

export default handleActions<{ data: Job[], error: Error | null}>(
    {
        [fetchJobsSucceed.toString()]: (
            state,
            { payload }
         ) => ({...state, data: payload.data }),
        [fetchJobsFailed.toString()]: (
            state,
            { payload }
         ) => ({...state, error: payload.error }),
    },
    { data: [], error: null }
)
