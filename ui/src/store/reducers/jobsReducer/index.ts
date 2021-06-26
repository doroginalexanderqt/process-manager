import { handleActions } from 'redux-actions'
import { Job } from '../../../../../shared'
import { fetchJobsFailed, fetchJobsSucceed } from '../../actions'
import { Action } from '../types'

export default handleActions<{ data: Job[], error: Error | null}>(
    {
        [(fetchJobsSucceed as Action).toString()]: (
            state,
            { payload }
         ) => ({...state, data: payload.data }),
        [(fetchJobsFailed as Action).toString()]: (
            state,
            { payload }
         ) => ({...state, error: payload.error }),
    },
    { data: [], error: null }
)
