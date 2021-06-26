import { combineEpics } from 'redux-observable';
import exampleEpic from './exampleEpic';

export default combineEpics(exampleEpic);
