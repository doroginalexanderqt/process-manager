import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootEpic from './epics';

import reducers from './reducers';

const epicMiddleware = createEpicMiddleware();

// @ts-ignore
const composeEnhancers = process.env.NODE_ENV !== 'production'
    ? composeWithDevTools
    : compose;

const store = createStore(reducers,
    composeEnhancers(
// @ts-ignore
        applyMiddleware(epicMiddleware)
    )
);

epicMiddleware.run(rootEpic);
console.log('store', store)
export default store
