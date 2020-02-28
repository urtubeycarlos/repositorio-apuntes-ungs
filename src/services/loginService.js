import RESTClient from './RESTClient';
const restclient = new RESTClient();

class Postion {

    constructor(){
        this.lat = undefined;
        this.lon = undefined;
    }

    getPosition(){

        var self = this;

        let options = {
            enableHighAccuracy: true,
            maximumAge: 3600000
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

        function onSuccess(position){
            self.lat = position.coords.latitude;
            self.lon = position.coords.longitude;
        }

        function onError(error) {
            this.getPosition()
        }

    }

}

let position = new Postion();
position.getPosition();
export const loginIn = restclient.post('login', position);

