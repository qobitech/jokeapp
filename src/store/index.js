import React, { useState, useEffect } from 'react'
import { getData } from '../http/actions'
import { Notification } from '../notification'
import { http_status_code } from '../constants'

export const MyProvider = ( props ) => {

    // for http request action types
    const [ data, setData ] = useState({});
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ isNotificationTrigger, setIsNotificationTrigger ] = useState(false);
    const [ httpStatusCode, setHttpStatusCode ] = useState(0);

    const [ jokes, setJokes ] = useState([]);
    const [ jokeCategory, setJokeCategory ] = useState("");
    const [ jokeQuantity, setJokeQuantity ] = useState("");
    const [ jokeType, setJokeType ] = useState("");
    
    // for notification state
    const [ notificationProps, setNotificationProps ] = useState({ status : false, message : "" })

    useEffect(()=>{
        setNotificationToHttpRequestStatus( httpStatusCode, error );
    },[ error, httpStatusCode ])

    const getNewJoke = async ( category, quantity, type ) => {
        // created object ( actionTypeProps ) with functions used for changing state of http request action types
        const actionTypeProps = { setData, setLoading, setError, setHttpStatusCode, setIsNotificationTrigger }
        
        // to make a http GET request
        getData( category, quantity, type, actionTypeProps )
    }

    // change notification based on common http request and response status codes
    const setNotificationToHttpRequestStatus = ( httpstatus, error ) => {
        switch( httpstatus ){

            case http_status_code.OK : 
                setNotificationProps( { status : true, message : "Success" } ); 
                break;

            case http_status_code.MANY_REQUESTS : 
                setNotificationProps( { status : false, message : "Many Requests" } );
                break;

            case http_status_code.BAD_GATEWAY : 
                setNotificationProps( { status : false, message : "Server Error" } );
                break;

            case http_status_code.SERVER_ERROR : 
                setNotificationProps( { status : true, message : "Server Error" } );
                break;

            case http_status_code.SERVICE_UNAVAILABLE : 
                setNotificationProps( { status : true, message : "Service Unavailable" } );
                break;

            case http_status_code.NETWORK_ERROR : 
                if( error )
                    setNotificationProps( { status : false, message : "Check your Internet Connection" } );
                break;

            default : 
                setNotificationProps( { status : false, message : "" } );
                break;
        }
    }

    // reset http request action types
    const resetActionTypes = ( ) => {
        setError(false);
        setLoading(false);
        setData("");
        setIsNotificationTrigger(false);
        setHttpStatusCode(0);
    }

    const resetJokeState = ( ) => {
        setJokeCategory("");
        setJokeQuantity("");
        setJokeType("");
    }

    return(

        <MyContext.Provider
            value={{
                jokes,
                setJokes,
                getNewJoke,
                data,
                error,
                loading,
                jokeCategory,
                setJokeCategory,
                jokeQuantity, 
                setJokeQuantity,
                jokeType,
                setJokeType,
                resetActionTypes,
                Notification,
                isNotificationTrigger,
                setIsNotificationTrigger,
                notificationProps,
                resetJokeState
            }}
        >
            <Notification/>

            { props.children }

        </MyContext.Provider>

    )

}

export const MyContext = React.createContext();