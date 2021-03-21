import React from 'react'
import './index.scss'
import { jokeType, jokeLanguage } from '../constants'
import rightarrow from '../assets/images/right-arrow.svg'
import leftarrow from '../assets/images/left-arrow.svg'
import { MyContext } from '../store'

const JokeCard = ( props ) => {

    const context = React.useContext( MyContext );

    const { jokeCardProps } = props

    const { next, prev, jokeObject, cardIndex, isPrev, isNext } = jokeCardProps

    let isJokeArray = Array.isArray( context.data.jokes )

    return(
        <div className="joke-card">

            {jokeObject.lang === jokeLanguage.ENGLISH &&
            
            <div className="joke-card-content" >

                <p className="card-index">Joke #&nbsp;{ cardIndex + 1 }&nbsp;of&nbsp;{ isJokeArray ? context.data.jokes.length : "1" }</p>

                {jokeObject.type === jokeType.SINGLE && <SingleJokeComponent item={ jokeObject }/> }

                {jokeObject.type === jokeType.TWOPART && <TwoPartJokeComponent item={ jokeObject }/> }

                <div className="info">
                    <div className="info-content" >
                        <p className="text-label">language</p>
                        <p className="text-info">
                            English
                        </p>
                    </div>
                    <div className="info-content" >
                        <p className="text-label">type</p>
                        <div dangerouslySetInnerHTML={{ __html : jokeObject.type }} className="text-info"/>
                    </div>
                    <div className="info-content" >
                        <p className="text-label">category</p>
                        <div dangerouslySetInnerHTML={{ __html : jokeObject.category }} className="text-info" />
                    </div>

                </div>

                {Array.isArray( context.data.jokes ) &&

                <div className="card-navigation">

                    <div className="nav-style-container" >

                        <img src={ leftarrow } alt="" onClick={ prev } className={ !isPrev() ? "nav-style" : "nav-style disable" } />

                    </div>
                    
                    <div className="nav-style-container" >
                      
                        <img src={ rightarrow } alt="" onClick={ next } className={ !isNext() ? "nav-style" : "nav-style disable" } />
                      
                    </div>

                </div>}

            </div>}

        </div>
    )

}

const SingleJokeComponent = ( props ) => {

    const { item } = props

    return(
        <div className="wrapper">
            <div dangerouslySetInnerHTML={{ __html : item.joke }} className="h5"/>
        </div>
    )
}

const TwoPartJokeComponent = ( props ) => {

    const { item } = props

    return(
        <div className="two-part">
            
            <div className="wrapper">
                {/* <p className="text-label">setup</p> */}
                <div dangerouslySetInnerHTML={{ __html : item.setup }} className="h5" />
            </div>

            <div className="wrapper delivery">
                {/* <p className="text-label">delivery</p> */}
                <div dangerouslySetInnerHTML={{ __html : item.delivery }} className="h5" />
            </div>

        </div>      
    )
}

export default JokeCard;