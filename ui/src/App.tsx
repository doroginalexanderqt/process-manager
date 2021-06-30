import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { ProcessesList } from './pages'

const App = () => (
    <Provider store={store}>
        <ProcessesList />
    </Provider>
)

export default App
