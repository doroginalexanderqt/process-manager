import { handleActions } from 'redux-actions'
import { Process } from '../../../types'
import { fetchProcessesSucceed, fetchProcessesFailed, createProcessFailed } from '../../actions'

export default handleActions<{ data: Process[], error: Error | null}>(
    {
        [fetchProcessesSucceed.toString()]: (
            state,
            { payload }
        ) => ({...state, data: payload.data }),
        [fetchProcessesFailed.toString()]: (
            state,
            { payload }
        ) => ({...state, error: payload.error }),
        [createProcessFailed.toString()]: (
            state,
            { payload }
        ) => ({...state, error: payload.error }),
    },
    { data: [], error: null }
)
