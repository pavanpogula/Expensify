const {createStore,combineReducers} = require('redux');
const {v4 } =require('uuid')




// FILTERS
const SET_TEXT_FILTER = 'SET_TEXT_FILTER';

const SET_START_DATE = 'SET_START_FILTER';

const SET_END_DATE = 'SET_END_FILTER';

const SORT_BY_DATE = 'SORT_BY_DATE';

const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';


const setTextFilter = (text)=>({
    type:SET_TEXT_FILTER,
    text
})
const sortByDate =()=>({
    type : SORT_BY_DATE,
    
})
const sortByAmount =()=>({
    type : SORT_BY_AMOUNT,   
})
const setEndDate = (endDate)=>({
    type:SET_END_DATE,
    endDate
})
const setStartDate = (startDate)=>({
    type:SET_START_DATE,
    startDate
})



const filterDefaultState ={
    text:'',
    sortBy:'',
    startDate:undefined,
    endDate:undefined,
}


const filterReducer =(state=filterDefaultState,action)=>{
    switch(action.type){
    
        case SET_TEXT_FILTER:
        return{
            ...state,
            text:action.text,
        }
        case SORT_BY_DATE:
             return{
                 ...state,
                 sortBy:'date',
             }
        case SORT_BY_AMOUNT:
            return{
                ...state,
                sortBy:'amount',
        }
        case SET_START_DATE:
            return{
                ...state,
                startDate:action.startDate,
            }
        case SET_END_DATE:
            return{
                ...state,
                endDate:action.endDate,
            }
        default :
            return state
    }
}





// EXPENSES
const ADD_EXPENSE ='ADD_EXPENSE'

const REMOVE_EXPENSE ='REMOVE_EXPENSE'

const EDIT_EXPENSE ='EDIT_EXPENSE'

const addExpense =(
    {
        description ='',
        note='',
        amount=0,
        createdAt=0,
    }={}
) =>({
    type:ADD_EXPENSE,
    expenses : {
        id:v4(),
        description,
        note,
        amount,
        createdAt,
    },

})


// REMOVE EXPENSEE
const removeExpense = (id)=>({
    type:REMOVE_EXPENSE,
    id:id
})

// EDIT EXPENSE
const editExpense = (id,updates)=> ({
    type:EDIT_EXPENSE,
    id,
    updates
})




const expensifyDefaultState=[]

const expenseReducer =(state=expensifyDefaultState,action)=>{
    switch(action.type){
        case ADD_EXPENSE:
            return [
                ...state,
                action.expenses
            ]
        case REMOVE_EXPENSE:{
            console.log(action.id)
            return state.filter(({id})=>id!==action.id)
        }
        case EDIT_EXPENSE:
            return state.map((expense)=>
                expense.id===id? {...expense,...action.updates}:expense
            )

        default :
            return state
    }
}


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    });
  };
  



  const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
    })
  );
  
  store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });
  
  const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
  const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
  
  // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
  // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
  
  store.dispatch(setTextFilter('ffe'));
  // store.dispatch(setTextFilter());
  
  // store.dispatch(sortByAmount());
  // store.dispatch(sortByDate());
  
  // store.dispatch(setStartDate(0)); // startDate 125
  // store.dispatch(setStartDate()); // startDate undefined
  // store.dispatch(setEndDate(999)); // endDate 1250
  