import React from 'react'
import clownicon from '../assets/images/clown.svg'
import { Link } from 'react-router-dom'
import { url } from '../constants'
import { MyContext } from '../store'
import './index.scss'

const NavBar = ( ) => {

    const context = React.useContext( MyContext );
    
    return(
        <header className="nav-bar">

            <div className="nav-bar-content">

                <Link to={ url.LANDING_PAGE } onClick={ ()=> { context.resetJokeState(); context.resetActionTypes(); } }>

                    <img src={ clownicon } alt="clown-icon" />

                </Link>

            </div>  
        </header>
    )
}

export default NavBar