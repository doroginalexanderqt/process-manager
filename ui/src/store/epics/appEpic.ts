import { of } from 'rxjs'
import { switchMap, delay } from 'rxjs/operators'
import { ofType, Epic } from 'redux-observable'
import { fetchEverything } from '../actions'

const REFETCH_INTERVAL = 60000*10 // 10 mins

const appEpic: Epic = (action$) => action$.pipe(
    ofType(fetchEverything),
    delay(REFETCH_INTERVAL),
    switchMap(() => of(fetchEverything())),
);

export default appEpic
