import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { batchDispatchMiddleware } from 'redux-batched-actions';

import rootEpic from './epics'

import reducers from './reducers'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = process.env.NODE_ENV !== 'production'
    ? composeWithDevTools
    : compose

const enhancers = [applyMiddleware(epicMiddleware, batchDispatchMiddleware)];

const store = createStore(reducers,
// @ts-ignore

        composeEnhancers(...enhancers)
)

epicMiddleware.run(rootEpic);

export default store
