import React from 'react';
import {Provider} from 'react-redux'
import Routers from './components/routes/Routers'
import {BrowserRouter} from 'react-router-dom';

// import store 
import store from './components/expensify/redux/store/store'
// import Demo from './components/HOC/Demo'
import {addExpense,setTextFilter}from './components/expensify/reduxActionExports'
import moment from 'moment'
function App() {

 fakeData()
// console.log(moment(0))
  return (
    
    <Provider store ={store}>
      <BrowserRouter>
        <div className="App">
          <Routers/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


const fakeData=()=>{
console.log(store)
  console.log(store.dispatch(addExpense({ description: 'Water bill',amount:12503,createdAt:4512,note:'kk' })));
  store.dispatch(addExpense({ description: 'Fibernet bill',amount:1200,createdAt:100 }));
  store.dispatch(addExpense({ description: 'Rent bill' ,amount:89647,createdAt:58736}));
  store.dispatch(addExpense({ description: 'Electric bill',amount:5647,createdAt:1782 }));
  store.dispatch(addExpense({ description: 'Gas bill' ,amount:745,createdAt:150303}));
  store.dispatch(addExpense({ description: 'Grocery bill',amount:6719,createdAt:1003547 }));

}