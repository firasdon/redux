import {createStore} from 'redux'
import rootreducer from './reducer/reducer'

const devTools = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


const store = createStore (rootreducer , devTools)

export default store ;