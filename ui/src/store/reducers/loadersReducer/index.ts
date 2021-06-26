import { handleActions } from 'redux-actions'
import { updateLoader } from '../../actions'
import { Action } from '../types'

type LoaderPayload = { name: string, value: boolean }

export default handleActions<{ [loaderKey: string]: boolean }, LoaderPayload>(
    {
        [(updateLoader as Action).toString()]: (
            state,
            { payload: { name, value } }
        ) => ({...state, [name]: value }),
    },
    { jobs: false, processes: false }
)
