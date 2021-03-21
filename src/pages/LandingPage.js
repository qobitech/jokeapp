import React, { useState, useEffect } from 'react'
import { MyContext } from '../store'
import { jokeCategories, jokeQuantity, jokeType, url } from '../constants'
import loader from '../assets/images/loaderwhite.svg'
import './index.scss'
import { withRouter } from 'react-router-dom'
import NavBar from '../layout/navbar'
import Footer from '../layout/footer'

const LandingPage = ( props ) => {
    
    const context = React.useContext( MyContext );

    const [ categoryError, setCategoryError ] = useState( { status : false, text : "" } )
    const [ quantityError, setQuantityError ] = useState( { status : false, text : "" } )
    const [ typeError, setTypeError ] = useState( { status : false, text : "" } )

    useEffect( () => {

        if( parseInt( context.jokeQuantity ) > 1 && Array.isArray( context.data.jokes ) && context.data.jokes.length > 0  ){

            props.history.push( `${ url.JOKE_PAGE }${ context.jokeCategory.toLowerCase() }` )

        }else if( parseInt( context.jokeQuantity ) === 1 && typeof context.data === "object" ){

            props.history.push( `${ url.JOKE_PAGE }${ context.jokeCategory.toLowerCase() }` )

        }

    }, [ context, props.history ] )
    
    const getJoke = ( e ) => {
        e.preventDefault();
        if( validation( ) ){
            context.resetActionTypes();
            context.getNewJoke( context.jokeCategory, context.jokeQuantity )
        }
    }

    const validation = ( ) => {
        setCategoryError( { status : context.jokeCategory === "" ? true : false, 
                            text : context.jokeCategory === "" ? "Select Joke Category" : "" } );
        setQuantityError( { status : context.jokeQuantity === "" ? true : false,
                            text : context.jokeQuantity === "" ? "Select Joke Quantity" : "" } );
        setTypeError( { status : context.jokeType === "" ? true : false,
                            text : context.jokeType === "" ? "Select Joke Type" : "" } );
        return typeof context.jokeCategory === "string" && context.jokeCategory !== "" && 
               typeof context.jokeQuantity === "string" && context.jokeQuantity !== ""
    }

    const setJokeCategory = ( e ) => {
        context.setJokeCategory( e.target.value )
        setCategoryError( { status : e.target.value === "" ? true : false, 
                            text : e.target.value === "" ? "Select Joke Category" : "" } );
    }
    
    const setJokeQuantity = ( e ) => {
        context.setJokeQuantity( e.target.value )
        setQuantityError( { status : e.target.value === "" ? true : false,
                            text : e.target.value === "" ? "Select Joke Quantity" : "" } );
    }

    const setJokeType = ( e ) => {
        context.setJokeType( e.target.value )
        setTypeError( { status : e.target.value === "" ? true : false,
                            text : e.target.value === "" ? "Select Joke Type" : "" } );
    }

    return(
        <>
        <NavBar/>
        <div className="page-container">

            <div className="page-content">

                <div className="header">
                    <h1>Welcome to Joke App</h1>
                </div>

                <div className="description">
                    <h5>Get entertained with random jokes</h5>
                </div>

                <form>

                    <div className="form-group" >

                        <label htmlFor="category" >Joke Category</label>

                        <select onChange={ setJokeCategory } name="category" value={ context.jokeCategory } id="jokeCategory"
                            onClick={ () => context.setIsNotificationTrigger( false ) }>
                            <option value="">Select</option>
                            { jokeCategories.map( ( category )=> (
                                    <option value={ category.item } key={ category.id } >{ category.item }</option>
                                ) ) }
                        </select>

                        <p className={categoryError.status ? "validate-p error" : "validate-p"} >{ categoryError.text }</p>

                    </div>

                    <div className="form-group" >

                        <label htmlFor="type" >Type of Jokes</label>

                        <select onChange={ setJokeType } name="type" value={ context.jokeType } id="jokeType"
                            onClick={ () => context.setIsNotificationTrigger( false ) }>
                            <option value="">Select</option>
                            { Object.values( jokeType ).map( ( type, index )=> (
                                    <option value={ type } key={ index } >{ type }</option>
                                ) ) }
                        </select>
                        
                        <p className={typeError.status ? "validate-p error" : "validate-p"}>{ typeError.text }</p>

                    </div>

                    <div className="form-group" >

                        <label htmlFor="quantity" >Number of Jokes</label>

                        <select onChange={ setJokeQuantity } name="quantity" value={ context.jokeQuantity } id="jokeQuantity"
                            onClick={ () => context.setIsNotificationTrigger( false ) }>
                            <option value="">Select</option>
                            { jokeQuantity.map( ( category )=> (
                                    <option value={ category.item } key={ category.id } >{ category.item }</option>
                                ) ) }
                        </select>
                        
                        <p className={quantityError.status ? "validate-p error" : "validate-p"}>{ quantityError.text }</p>

                    </div>

                    <button onClick={ getJoke } type="submit" disabled={ context.loading } style={{ cursor : `${ context.loading ? "not-allowed" : "pointer" }` }}
                        className="btn" >
                        Begin
                        {context.loading &&
                        <img src={ loader } alt="" />}
                    </button>

                </form>

            </div>
            
        </div>
        <Footer />
        </>
    )

}

export default withRouter ( LandingPage );