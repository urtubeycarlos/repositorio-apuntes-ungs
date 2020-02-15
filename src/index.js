import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import 'cordova_script';


document.addEventListener('deviceready', () => {

    ReactDOM.render(
        <App cordovaWork={true} />,
        document.getElementById('app')
    );
}, false);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
