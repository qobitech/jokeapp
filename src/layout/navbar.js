import React from 'react'
import clownicon from '../assets/images/clown.svg'
import { Link } from 'react-router-dom'
import { url } from '../constants'
import './index.scss'

const NavBar = ( ) => {
    return(
        <header className="nav-bar">

            <div className="nav-bar-content">

                <Link to={ url.LANDING_PAGE }>

                    <img src={ clownicon } alt="clown-icon" />

                </Link>

            </div>  
        </header>
    )
}

export default NavBar