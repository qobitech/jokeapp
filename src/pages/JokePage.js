import React, { useState, useEffect } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { MyContext } from '../store'
import { url } from '../constants'
import JokeCard from './JokeCard'
import NavBar from '../layout/navbar'
import Footer from '../layout/footer'


const JokePage = ( ) => {

    const context = React.useContext( MyContext );

    const [ jokeObject, setJokeObject ] = useState( {} )
    const [ cardIndex, setCardIndex ] = useState( 0 )

    useEffect( ( ) => { 

        if( parseInt( context.jokeQuantity ) > 1 ){

            Array.isArray( context.data.jokes ) && setJokeObject( context.data.jokes[ 0 ] )

        }else{

            typeof context.data === "object" && setJokeObject( context.data )

        }

    }, [ context ] )
    
    const next = ( ) => {
            let tempIndex = ( cardIndex + 1 ) > ( context.data.jokes.length - 1 ) ? cardIndex : cardIndex + 1;
            setJokeObject( context.data.jokes[ tempIndex ] );
            setCardIndex( tempIndex );
    }

    const prev = ( ) => {
        let tempIndex = ( cardIndex ) < 1 ? cardIndex : cardIndex - 1;  
        setJokeObject( context.data.jokes[ tempIndex ] );
        setCardIndex( tempIndex );
    }

    const isPrev = ( ) => {
        return cardIndex < 1
    }

    const isNext = ( ) => {
        return ( cardIndex + 1 ) > ( context.data.jokes.length - 1 );
    }

    const jokeCardProps = { next, prev, jokeObject, cardIndex, isPrev, isNext } 
    
    return(
        <>
        <NavBar/>
        <div className="page-container" >
            
            <div className="page-content">

                <div className="header">
                    <h2>Jokes</h2>
                </div>

                <Link to={ url.LANDING_PAGE } className="link" onClick={ ()=> { context.resetJokeState(); context.resetActionTypes(); } } >
                    <p className="top-link">Back to Home Page</p>
                </Link>

                <div className="joke-card-container" >

                    <JokeCard jokeCardProps={ jokeCardProps } />

                </div>

                <Link to={ url.LANDING_PAGE } className="link" onClick={ ()=> { context.resetJokeState(); context.resetActionTypes(); } } >
                    <button className="btn jokebtn" >
                        Back to Home Page
                    </button>
                </Link>

            </div>
            
        </div>
        <Footer />
        </>
    )

}

export default JokePage;