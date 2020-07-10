
import {ADD_EXPENSE,REMOVE_EXPENSE, EDIT_EXPENSE} from './types'

const expensifyDefaultState=[]

const expenseReducer =(state=expensifyDefaultState,action)=>{
    switch(action.type){
        case ADD_EXPENSE:
            console.log([
                ...state,
                action.expenses
            ])
            return [
                ...state,
                action.expenses
            ]
        case REMOVE_EXPENSE:{
            // console.log(action.id)
            return state.filter(({id})=>id!==action.id)
        }
        case EDIT_EXPENSE:
            return state.map((expense)=>
                expense.id===action.id? {...expense,...action.updates}:expense
            )

        default :
            return state
    }
}

export  default expenseReducer;