import { from } from 'rxjs'
import { switchMap, startWith, endWith } from 'rxjs/operators'
import { ofType, Epic } from 'redux-observable'
import { fetchJobs, fetchJobsFailed, fetchJobsSucceed, updateLoader } from '../actions'
import { jobs } from '../../api'
import { loaderValues } from '../../constantValues'
import { Response } from './types'
import { Job } from '../../../../shared'

const fetchJobsEpic: Epic = (action$, state$) => action$.pipe(
    ofType(fetchJobs),
    switchMap(() =>
        from(jobs.getJobs()
            .then((response: Response<{ data: Job[] }>) => fetchJobsSucceed(response))
            .catch((e: Error) => fetchJobsFailed(e)))
            .pipe(
                startWith(updateLoader({ name: loaderValues.jobs, value: true })),
                endWith(updateLoader({ name: loaderValues.jobs, value: false }))
            ))
);

export default fetchJobsEpic
