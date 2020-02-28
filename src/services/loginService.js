import config from './../config';

export const loginIn = position => {
    if( !(position instanceof FormData) )
        throw new Error('position must be a instance of FormData');
    let url = `${config.serverURI}/login.php`;
    console.log(url)
    return fetch(url, {
        method: 'POST',
        data: position
    }).then( response => response.json() );
} 
    

