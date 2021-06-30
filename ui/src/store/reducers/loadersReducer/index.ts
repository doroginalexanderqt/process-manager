import { handleActions } from 'redux-actions'
import { updateLoader } from '../../actions'

export type LoaderPayload = { name: string, value: boolean }

export default handleActions<{ [loaderKey: string]: boolean }, LoaderPayload>(
    {
        [updateLoader.toString()]: (
            state,
            { payload: { name, value } }
        ) => ({...state, [name]: value }),
    },
    { jobs: false, processes: false }
)
