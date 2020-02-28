import RESTClient from './RESTClient';
const restclient = new RESTClient();

export const getAllAssignatures = () => restclient.get('assignature');
export const getAssignature = (assignatureId) => restclient.get('assignature', assignatureId);
export const getAssignatureByCareer = (careerId) => restclient.get('assignature', null, { careerid: careerId });
