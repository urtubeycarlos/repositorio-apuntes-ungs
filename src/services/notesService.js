import RESTClient from './RESTClient';
const restclient = new RESTClient();

export const getAllNotes = () => restclient.get('note');
export const getNoteByAssignaure = (assignatureId) => restclient.get('assignature', null, { assignatureid: assignatureId });
