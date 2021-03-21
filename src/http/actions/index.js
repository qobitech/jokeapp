import { GET } from '../methods'
import { END_POINT } from '../../constants'

export const getData = ( category, number, type, actionTypeProps ) => {

    const { setError, setLoading, setData, setHttpStatusCode, setIsNotificationTrigger } = actionTypeProps

    setLoading( { status : true } )

    GET( END_POINT( category, number, type ) )
    .then( resp => {
        setHttpStatusCode( resp.status );
        setLoading( false );
        setData( resp.data );
        setIsNotificationTrigger( true );

    } )
    .catch( ( error ) => {

        setLoading( false );
        setError( true );
        setIsNotificationTrigger( true );

        if( error.response ){
            setHttpStatusCode( error.response.status );
        }

        if( error.request ){
            setHttpStatusCode( error.request.status );
        }
        
    } )

}