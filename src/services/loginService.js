import RESTClient from './RESTClient';
import config from './../config'
const restclient = new RESTClient();

/* export const loginIn = position => restclient.signIn(position); */
export const loginIn = position => fetch(`${config.serverURI}/login`, {
    method: 'POST',
    mode: 'cors',
    data: position
}).then( response => response.json() );


    

