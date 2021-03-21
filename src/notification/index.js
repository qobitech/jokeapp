import './index.scss'
import React, { useEffect } from 'react'
import { MyContext } from '../store'
import clownicon from '../assets/images/clown.svg'
import { NOTIFICATION_TIMEOUT } from '../constants'

export const Notification = ( props ) => {

    const context = React.useContext(MyContext);

    const { status, message } = context.notificationProps;

    useEffect(()=>{

        // close notification status modal after timeout 
        if( context.isNotificationTrigger ){
            setTimeout(()=>{
                context.setIsNotificationTrigger( false )
            }, NOTIFICATION_TIMEOUT )
        }

    },[ context ])

    return(
        <div className={ context.isNotificationTrigger ? "notification-container open" : "notification-container close" } >

            <div className="notification-bg" >
                
                <div className="notification-header" >
                    <img src={ clownicon } alt="" onClick={ ()=> context.setIsNotificationTrigger( false ) } />
                </div>

                <div className="notification-body" >
 
                    <div className="notification-content" >
                        
                        <p className={ status ? "true" : "false" }>
                            { message }
                        </p>

                    </div>
                    
                </div>

            </div>    
            
        </div>
    )
}