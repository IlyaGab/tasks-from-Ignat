import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './Pages';
import c from './Header.module.css'

function Header() {

    return (
        <div className={c.navParent}> Navigation
            <div className={c.navChild}>
                <NavLink className={c.navLink} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
                <NavLink className={c.navLink} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={c.navLink} to={PATH.JUNIOR_PLUS}>Junior-plus</NavLink>
            </div>
        </div>
    )
}

export default Header
