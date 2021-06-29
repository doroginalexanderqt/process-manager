import { combineReducers } from 'redux'
import jobsReducer from './jobsReducer'
import loadersReducer from './loadersReducer'
import processesReducer from './processesReducer'
import { Job, Process } from '../../types';

export type Store = {
    jobs: { data: Job[], error: Error },
    processes: { data: Process[], error: Error } ,
    loaders: { [loaderKey: string]: boolean }
}

export default combineReducers({
    jobs: jobsReducer,
    loaders: loadersReducer,
    processes: processesReducer,
})
