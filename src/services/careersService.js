import config from "./../config";
import RESTClient from './RESTClient';
const restclient = new RESTClient();


/* export const getAllCareers = () => restclient.get('career'); */
/* export const getAllCareers = function(){
    console.warn("Obteniendo las carreras");
    console.warn(config.serverURI);
    let url = `${config.serverURI}/api/${config.currentApiVersion}/career`
    return fetch(url, {
        method: 'GET',
        mode: 'cors'
    }).then( response => console.log(response.json()) );
} */
/* export const getCareer = function(careerId){
    let url = `${config.serverURI}/api/${config.currentApiVersion}/career?careerid=${careerId}`
    fetch(url).then( response => response.json() );
} */

export const getAllCareers = () => {
    return fetch(`${config.serverURI}/api/${config.currentApiVersion}/career`)
        .then( response => response.json() )
}
export const getCareer = (careerId) => restclient.get('career', careerId);
