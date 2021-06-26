import { handleActions } from 'redux-actions'
import { Process } from '../../../types'
import { fetchProcessesSucceed, fetchProcessesFailed } from '../../actions'
import { Action } from '../types';

export default handleActions<{ data: Process[], error: Error | null}>(
    {
        [(fetchProcessesSucceed as Action).toString()]: (
            state,
            { payload }
        ) => ({...state, data: payload.data }),
        [(fetchProcessesFailed as Action).toString()]: (
            state,
            { payload }
        ) => ({...state, error: payload.error }),
    },
    { data: [], error: null }
)
