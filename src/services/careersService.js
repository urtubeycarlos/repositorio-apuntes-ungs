import RESTClient from './RESTClient';
const restclient = new RESTClient();


export const getAllCareers = () => restclient.get('career');
export const getCareer = (careerId) => restclient.get('career', careerId);
