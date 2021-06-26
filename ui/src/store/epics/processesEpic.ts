import { from } from 'rxjs'
import { switchMap, startWith, endWith } from 'rxjs/operators'
import { ofType, Epic } from 'redux-observable'
import {
    fetchProcesses,
    fetchProcessesFailed,
    fetchProcessesSucceed,
    updateLoader
} from '../actions'
import { processes } from '../../api'
import { loaderValues } from '../../constantValues'
import { Response } from './types'
import { Process } from '../../types'

const fetchProcessesEpic: Epic = (action$) => action$.pipe(
    ofType(fetchProcesses),
    switchMap(() =>
        from(processes.get()
            .then((response: Response<{ data: Process[] }>) => fetchProcessesSucceed(response))
            .catch((e: Error) => fetchProcessesFailed(e)))
            .pipe(
                startWith(updateLoader({ name: loaderValues.jobs, value: true })),
                endWith(updateLoader({ name: loaderValues.jobs, value: false }))
            ))
);

export default fetchProcessesEpic
