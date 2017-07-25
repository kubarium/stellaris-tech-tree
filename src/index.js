import './styles/index.css'

import App from './components/App'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {data} from './tech.json'
import reducers from './Reducers'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(reducers, data)
window.store = store

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
