import config from './../config'

const axios = require('axios');

export default class RESTClient {
  apiUri = '';
  constructor(apiURI = `${config.serverURI}/api/${config.currentApiVersion}`) {
    this.apiURI = apiURI;
  }

  get(endpoint, id = null, filters = {}) {
    const urlEndpoint = id ? 
    `${this.apiURI}/${endpoint}/${id}${this.getFiltersUrl(filters)}` : 
    `${this.apiURI}/${endpoint}${this.getFiltersUrl(filters)}`

    return axios.get(urlEndpoint);
  }

  post(endpoint, data) {
    if( !(data instanceof FormData) ) {
      throw new Error('Data must be a instance of FormData');
    }
    const urlEndpoint = `${this.apiURI}/${endpoint}`;
    return axios.post(urlEndpoint, data);
  }

  signIn(position) {
    const params = new URLSearchParams();
    params.append('lat', position.lat);
    params.append('lon', position.lon);
    return axios.post(`${config.serverURI}/login`, params);
  }

  parseFilterValue( value ) {
    if (value._isAMomentObject){
      return value.toISOString();
    }
    return value;
  }

  getFiltersUrl(filters) {
    let result = [];
    for (var key in filters) {
      if (filters[key] === undefined) { // what is this case for?
        result.push(key);
      }
      else {
        result.push(`${key}=${this.parseFilterValue(filters[key])}`);
      }
    }
    return `?${result.join('&')}`;
  }
}