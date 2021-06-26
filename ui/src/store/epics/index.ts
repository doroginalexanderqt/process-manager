import { combineEpics } from 'redux-observable'
import exampleEpic from './jobsEpic'
import processesEpic from './processesEpic'

export default combineEpics(exampleEpic, processesEpic)
