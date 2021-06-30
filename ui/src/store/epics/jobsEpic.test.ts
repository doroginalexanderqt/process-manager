import { toArray } from 'rxjs/operators'
import { of } from 'rxjs'

import epic from './jobsEpic'
import { fetchJobs, fetchJobsSucceed, updateLoader } from '../actions'

jest.mock('../../api', () => ({
    jobs: {
        get: () => Promise.resolve('fakeResponse')
    }
}))

describe('jobsEpic', () => {

    it('dispatches the correct actions for fetchJobs with success result', (done) => {
        const action$ = of(
            fetchJobs()
        );
        const expectedOutputAction = [
            updateLoader({ name: 'jobs', value: true }),
            fetchJobsSucceed('fakeResponse'),
            updateLoader({ name: 'jobs', value: false })
        ];

        // @ts-ignore wrong type
        epic(action$).pipe(toArray())
            .subscribe((actualOutputAction) => {
                expect(actualOutputAction).toEqual(expectedOutputAction);
                setTimeout(done);
            });
    });

})
