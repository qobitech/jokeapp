
export const END_POINT = ( category, number, type ) => `https://v2.jokeapi.dev/joke/${ category !== undefined ? category : "Any" }?format=json&blacklistFlags=nsfw,sexist&type=
                                                        ${ type !== undefined ? type : "single"}&amount=${ number !== undefined ? number : "10" }`

//page urls
export const url = {
    LANDING_PAGE : '/',
    ABOUT_PAGE : '/about/',
    JOKE_PAGE : '/jokes/category/',
    PAGE_404 : '/404'
}

//http errors
export const http_status_code = {
    OK : 200,
    BAD_REQUEST : 400,
    UNAUTHORIZED : 401,
    FORBIDDEN : 403,
    NOT_ALLOWED : 405,
    MANY_REQUESTS : 429,
    LEGALLY_UNAVAILABLE : 451,
    SERVER_ERROR : 500,
    BAD_GATEWAY : 502,
    SERVICE_UNAVAILABLE : 503,
    NETWORK_ERROR : 0 
}

//joke category
export const jokeCategories = [   
    { id : 13243, item : "Misc" },
    { id : 33245, item : "Programming" },
    { id : 23432, item : "Pun" },
    { id : 87034, item : "Any" },
]

export const jokeQuantity = [
    { id : 1, item : "1" },
    { id : 2, item : "2" },
    { id : 3, item : "3" },
    { id : 4, item : "4" },
    { id : 5, item : "5" },
    { id : 6, item : "6" },
    { id : 7, item : "7" },
    { id : 8, item : "8" },
    { id : 9, item : "9" },
    { id : 10, item : "10" }
]

export const jokeLanguage = {
    CZECH : "cs", 
    DEUTSCH : "de", 
    ENGLISH : "en", 
    SPANISH : "es", 
    FRENCH : "fr", 
    PORTUGESE : "pt"
}

export const jokeType = {
    SINGLE : "single", 
    TWOPART : "twopart"
}


//notification timeout
export const NOTIFICATION_TIMEOUT = 6000;