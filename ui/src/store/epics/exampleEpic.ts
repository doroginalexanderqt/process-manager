import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ofType, combineEpics, Epic } from 'redux-observable';
import { example } from '../actions'

const exampleEpic: Epic = (action$, state$) => action$.pipe(
    ofType(example),
    switchMap(() => {
        console.log('Hello from epic')
        return EMPTY
    })
);

export default combineEpics(exampleEpic);
