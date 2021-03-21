import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { MyContext } from '../store'
import { url } from '../constants'
import JokeCard from './JokeCard'


const JokePage = ( ) => {

    const context = React.useContext( MyContext );
    

    
    return(
        <div className="page-container" >
            
            <div className="page-content">

                <div className="header">
                    <h2>Jokes</h2>
                </div>

                <Link to={ url.LANDING_PAGE } className="link" onClick={ ()=> { context.resetJokeState(); context.resetActionTypes(); } } >
                    <p className="top-link">Back to Home Page</p>
                </Link>

                { parseInt( context.jokeQuantity ) === 1 ?
                    <>
                        { typeof context.data === "object" && 

                            <JokeCard item={ context.data } index={ 1 } key={ context.data.id } />
                        }
                    </>
                :
                    <>
                        {Array.isArray( context.data.jokes ) && context.data.jokes.map( ( item, index ) => (

                            <JokeCard item={ item } index={ index+1 } key={ item.id } />

                        ) )}
                    </>
                }

                <Link to={ url.LANDING_PAGE } className="link" onClick={ ()=> { context.resetJokeState(); context.resetActionTypes(); } } >
                    <button className="btn jokebtn" >
                        Back to Home Page
                    </button>
                </Link>
            </div>
            
            
        </div>
    )

}

export default JokePage;