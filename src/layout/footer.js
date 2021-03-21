import React from 'react'
import './index.scss'

const Footer = ( ) => {
    return(
        <footer className="footer">

            <div className="footer-content" >
                <span onClick={()=>window.open( "https://edekobi.com", "_blank" ) } style={{ cursor : "pointer" }}>
                    <p>&copy;&nbsp;2021. Frank Edekobi</p>
                </span>
            </div>

        </footer>
    )
}

export default Footer