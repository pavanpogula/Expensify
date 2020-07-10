import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../reduxActionExports'
import {Link} from 'react-router-dom'
export const  ExpenseListItem=({id,description,amount,createdAt})=>{
    return (
        <div>
            <Link to={`/edit/${id}`}>            
                <h2>{description}</h2>
            </Link>

    <div>
       <p>Amount : <b>{amount}</b>  {'   '}  Created Time :<b>{createdAt}</b></p>
      
       {/* <button onClick={()=>dispatch(removeExpense(id))}>Remove</button> */}
    </div>
        </div>
    )
}

export default connect()(ExpenseListItem)
