import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { JobsList } from './components'

const App = () => (
    <Provider store={store}>
        <JobsList/>
    </Provider>
)

export default App
