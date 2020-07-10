import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate} from '../reduxActionExports'
function ExpenseFilterInput(props) {
    return (
        <div style={{paddind:'10px',margin:'5px'}}>
            <input type='text' value={props.filters.text} onChange={(e)=>{
                console.log(e.target.value)
                props.dispatch(setTextFilter(e.target.value))
            }}/>

            Sort by:
            <select

                value={props.filters.sortBy}
                onChange={(e)=>{
                   
                if(e.target.value==='amount'){
                    props.dispatch(sortByAmount('amount'))
                }else{
                    props.dispatch(sortByDate('date'))
                }
            }} style={{paddind:'10px',margin:'5px'}}>
                <option value="time">Created Time</option>
                <option value="amount">Amount</option>
            </select>
       
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {filters:state.filters}
}
export default connect(mapStateToProps)(ExpenseFilterInput)