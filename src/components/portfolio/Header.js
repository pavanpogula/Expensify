import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => (
    <div >
        <h1>
           PortFolio
</h1>
        <NavLink className="nav-link-el" to="/" activeClassName="is-active" exact> Home</NavLink>
        <NavLink className="nav-link-el" to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
        <NavLink className="nav-link-el" to="/help" activeClassName="is-active">Contact</NavLink>
   

    </div>
)


export default Header
