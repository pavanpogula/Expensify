import {store,combineReducers} from 'redux';
import expensifyReducer from '../Expensify/reducer'
import filterReducer from '../Filter/reducer'

const reducers = combineReducers(
    {
      expenses: expensifyReducer,
      filters: filterReducer
    }
)

export default  reducers