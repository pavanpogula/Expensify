import React from 'react'
import ExpenseList from './ExpenseList'

import ExpenseFilterInput from './ExpenseListFilters'
function DashBoardPage() {
    return (<>
        <ExpenseFilterInput/>
       <ExpenseList/>
       </>
    )
}

export default DashBoardPage
