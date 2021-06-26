import { combineReducers } from 'redux'
import jobsReducer from './jobsReducer'
import loadersReducer from './loadersReducer'
import processesReducer from './processesReducer'

export default combineReducers({
    jobs: jobsReducer,
    loaders: loadersReducer,
    processes: processesReducer,
})
