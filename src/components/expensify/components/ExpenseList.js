import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

import expensesSelectors from '../redux/selectors/expenses'

export const ExpenseList=(props)=>{
    console.log(props.expenses)
    return (
        <div>
            
            {
                props.expenses.length===0?
                <h2>No Expenses</h2>:
                <>
                <h2>ExpenseList</h2>
                    {props.expenses.map(expense=>(
                    <ExpenseListItem
                        key={expense.id}
                        {...expense}   
                    />
                    ))}
                </>
            }
                
        </div>
    )
}
const mapStateToProps  =(state)=>{
    console.log(state.filters)
    return{
        expenses:expensesSelectors(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);
