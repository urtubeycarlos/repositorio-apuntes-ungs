const axios = require('axios');

export default class RESTClient {
  apiUri = '';

  constructor(apiURI = 'https://repositorio-apuntes-ungs.000webhostapp.com/api/1.0') {
    this.apiURI = apiURI;
  }

  get(endpoint, id = null, filters = {}) {
    const urlEndpoint = id ? 
    `${this.apiURI}/${endpoint}/${id}${this.getFiltersUrl(filters)}` : 
    `${this.apiURI}/${endpoint}${this.getFiltersUrl(filters)}`

    return axios.get(urlEndpoint);
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