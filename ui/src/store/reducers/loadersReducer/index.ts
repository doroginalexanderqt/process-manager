import { handleActions } from 'redux-actions'
import { loaderValues } from '../../../constantValues'
import { updateLoader } from '../../actions'

export type LoaderPayload = { name: string, value: boolean }

const initialState = Object.keys(loaderValues).reduce((acc, key) => ({
    ...acc,
    [key]: false
}), {})

export default handleActions<{ [loaderKey: string]: boolean }, LoaderPayload>(
    {
        [updateLoader.toString()]: (
            state,
            { payload: { name, value } }
        ) => ({...state, [name]: value }),
    },
    initialState
)
