import React from 'react'
import { Route, Switch, Link, NavLink } from 'react-router-dom'
import './routStyle.scss'
import NotFoundPage from '../NotFoundPage'


import DashBoardPage from '../expensify/components/DashBoardPage'
import EditPage from '../expensify/components/EditExpensePage'
import AddExpensePage from '../expensify/components/AddExpensePage'
import HelpPage from '../expensify/components/HelpPage'

import Header from '../expensify/components/Header'
export default   function Routers() {
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/" component={DashBoardPage} exact/>
                <Route path="/edit/:id" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>

        </React.Fragment>
    )
}



// import Home from '../portfolio/Home'
// import Portfolio from '../portfolio/Portfolio'
// import PortfolioItem from '../portfolio/PortfolioItem'
// import Contact from '../portfolio/Contact'
// import Header from '../portfolio/Header'

// export default   function Routers() {
//     return (
//         <React.Fragment>
//             <Header />
//             <Switch>
//                 <Route path="/" component={Home} exact/>
//                 <Route path="/portfolio" component={Portfolio}  exact/>
//                 <Route path="/portfolio/:id" exact={true} component={PortfolioItem} />
//                 <Route path="/help" component={Contact} />
//                 <Route component={NotFoundPage} />


//             </Switch>

//         </React.Fragment>
//     )
// }






