var isDev = undefined;

if( window.location.hostname.includes('localhost') )
    isDev = true;
else
    isDev = false;

var serverURI = isDev? "http://localhost":"https://repositorio-apuntes-ungs.000webhostapp.com";
var currentApiVersion = "1.0";