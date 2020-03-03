import RESTClient from './RESTClient';
import config from './../config'

const restclient = new RESTClient();

export const getAllNotes = () => restclient.get('note');
export const getNoteByAssignaure = (assignatureId) => restclient.get('note', null, { assignatureid: assignatureId });
export const uploadFile = (data) => {
    if( !(data instanceof FormData) )
        throw new Error('data isnt instance of FormData')

    return fetch(`${config.serverURI}/api/${config.currentApiVersion}/note`, {
        method: 'POST',
        mode: 'cors',
        body: data
    })
}
