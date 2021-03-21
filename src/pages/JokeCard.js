import React from 'react'
import './index.scss'
import { jokeType, jokeLanguage } from '../constants'

const JokeCard = ( props ) => {

    const { item, index } = props

    return(
        <div className="joke-card">

            {item.lang === jokeLanguage.ENGLISH &&
            
            <div className="joke-card-content" >

                <p className="card-index">Joke #&nbsp;{ index }</p>

                {item.type === jokeType.SINGLE && <SingleJokeComponent item={ item }/> }

                {item.type === jokeType.TWOPART && <TwoPartJokeComponent item={ item }/> }

                <div className="info">
                    <div className="info-content" >
                        <p className="text-label">language</p>
                        <p className="text-info">
                            English
                        </p>
                    </div>
                    <div className="info-content" >
                        <p className="text-label">type</p>
                        <div dangerouslySetInnerHTML={{ __html : item.type }} className="text-info"/>
                    </div>
                    <div className="info-content" >
                        <p className="text-label">category</p>
                        <div dangerouslySetInnerHTML={{ __html : item.category }} className="text-info" />
                    </div>

                </div>

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