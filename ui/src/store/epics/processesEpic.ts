import { from } from 'rxjs'
import { switchMap, startWith, endWith } from 'rxjs/operators'
import { ofType, Epic, combineEpics } from 'redux-observable'
import {
    createProcess,
    createProcessFailed,
    createProcessSucceed,
    fetchJobs,
    fetchProcesses,
    fetchProcessesFailed,
    fetchProcessesSucceed,
    updateLoader
} from '../actions'
import { processes } from '../../api'
import { loaderValues } from '../../constantValues'
import { Response } from './types'
import { Process } from '../../types'
import { batchActions } from 'redux-batched-actions'

const fetchProcessesEpic: Epic = (action$) => action$.pipe(
    ofType(fetchProcesses),
    switchMap(() =>
        from(processes.get()
            .then((response: Response<{ data: Process[] }>) => fetchProcessesSucceed(response))
            .catch(fetchProcessesFailed))
            .pipe(
                startWith(updateLoader({ name: loaderValues.processes, value: true })),
                endWith(updateLoader({ name: loaderValues.processes, value: false }))
            ))
);

const createProcessEpic: Epic = (action$) => action$.pipe(
    ofType(createProcess),
    switchMap(() =>
        from(processes.post()
            .then((response: Response<{ data: Process[] }>) => batchActions([
                createProcessSucceed(response),
                fetchProcesses(),
                fetchJobs(),
            ]))
            .catch(createProcessFailed))
            .pipe(
                startWith(updateLoader({ name: loaderValues.createProcess, value: true })),
                endWith(batchActions([
                    updateLoader({ name: loaderValues.createProcess, value: false })]
                ))
            ))
);

export default combineEpics(fetchProcessesEpic, createProcessEpic)
