import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => (
    <div >
        <h1>
            Expensify
</h1>
        <NavLink className="nav-link-el" to="/" activeClassName="is-active" exact> DashBoard</NavLink>
       
        <NavLink className="nav-link-el" to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink className="nav-link-el" to="/help" activeClassName="is-active">Help</NavLink>

    </div>
)


export default Header
