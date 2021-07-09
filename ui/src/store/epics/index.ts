import { combineEpics } from 'redux-observable'
import exampleEpic from './jobsEpic'
import processesEpic from './processesEpic'
import appEpic from './appEpic'

export default combineEpics(appEpic, exampleEpic, processesEpic)
