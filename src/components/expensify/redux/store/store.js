import {createStore} from 'redux'

import reducers from './storeConfig'

const store = createStore(reducers)

export default store;