import { serverURI } from './../config.js';
const axios = require('axios');

let url = `${serverURI}/login.php`;

export const login = pos => {
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        body: pos
    }).then( response => response.json() );
};