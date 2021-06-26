import { from } from 'rxjs'
import { switchMap, startWith, endWith } from 'rxjs/operators'
import { ofType, Epic } from 'redux-observable'
import {
    fetchProcess,
    fetchProcessFailed,
    fetchProcessSucceed,
    updateLoader
} from '../actions'
import { jobs } from '../../api'
import { loaderValues } from '../../constantValues'
import { Response } from './types'
import { Job } from '../../types'

const fetchProcessesEpic: Epic = (action$, state$) => action$.pipe(
    ofType(fetchProcess),
    switchMap(() =>
        from(jobs.getJobs()
            .then((response: Response<{ data: Job[] }>) => fetchProcessSucceed(response))
            .catch((e: Error) => fetchProcessFailed(e)))
            .pipe(
                startWith(updateLoader({ name: loaderValues.jobs, value: true })),
                endWith(updateLoader({ name: loaderValues.jobs, value: false }))
            ))
);

export default fetchProcessesEpic
