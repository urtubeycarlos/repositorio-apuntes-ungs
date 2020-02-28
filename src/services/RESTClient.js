import { serverURI, currentApiVersion } from './../config.js';
const axios = require('axios');

export default class RESTClient {
  apiUri = '';
  constructor(apiURI = `${serverURI}/api/${currentApiVersion}`) {
    this.apiURI = apiURI;
  }

  get(endpoint, id = null, filters = {}) {
    const urlEndpoint = id ? 
    `${this.apiURI}/${endpoint}/${id}${this.getFiltersUrl(filters)}` : 
    `${this.apiURI}/${endpoint}${this.getFiltersUrl(filters)}`

    return axios.get(urlEndpoint);
  }

  post(endpoint, body){
    if( body == undefined || Object.keys(body).length === 0 )
      throw new Error("Body cant be empty");
    let urlEndpoint = `${this.apiURI}/${endpoint}`
    return axios.post(urlEndpoint, body);
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
      if (filters[key] == undefined) { // what is this case for?
        result.push(key);
      }
      else {
        result.push(`${key}=${this.parseFilterValue(filters[key])}`);
      }
    }
    return `?${result.join('&')}`;
  }
}