import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const offset = 0.0001;

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            setLatitude(latitude + offset);
            setLongitude(longitude + offset);
        }

        function error() {
            console.log("Unable to retrieve your location");
        }
    });

    return (
      <div className="App">
          <a-scene
              vr-mode-ui="enabled: false"
              arjs='sourceType: webcam;  debugUIEnabled: false; '
              renderer='logarithmicDepthBuffer: true; antialias: true; alpha: true'>
              <a-camera gps-new-camera='gpsMinDistance: 50'></a-camera>
              <a-box material='color: yellow;'
                     gps-entity-place={'latitude: ' + latitude + '; longitude: ' + longitude}></a-box>
              <a-box material='color: red;' gps-new-entity-place='latitude: 50.4789968; longitude: 30.4349872'></a-box>
          </a-scene>
      </div>
    );
}

export default App;
