import axios from 'axios'


//GET
export const GET = ( url ) => {
    return axios({
            method : 'GET',
            url,
            validateStatus : ()=> true
        })
}