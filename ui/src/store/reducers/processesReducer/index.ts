import { handleActions } from 'redux-actions'
import { Process } from '../../../../../shared'
import { fetchProcessSucceed, fetchProcessFailed } from '../../actions'
import { Action } from '../types';

export default handleActions<{ data: Process[], error: Error | null}>(
    {
        [(fetchProcessSucceed as Action).toString()]: (
            state,
            { payload }
        ) => ({...state, data: payload.data }),
        [(fetchProcessFailed as Action).toString()]: (
            state,
            { payload }
        ) => ({...state, error: payload.error }),
    },
    { data: [], error: null }
)
