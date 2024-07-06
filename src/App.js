import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [gpsString, setGpsString] = useState("")

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation not supported");
        }

        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setGpsString(`latitude: ${latitude}; longitude: ${longitude}`);
            console.log(`Latitude: ${latitude + 0.001}, Longitude: ${longitude}`);
        }

        function error() {
            console.log("Unable to retrieve your location");
        }
    }, []);

    return (
        <a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false'
                 renderer='antialias: true; alpha: true'>
            <a-camera gps-new-camera='gpsMinDistance: 150'></a-camera>
            <a-entity material='color: red' geometry='primitive: box'
                      gps-new-entity-place={gpsString} scale="5 5 5"></a-entity>
        </a-scene>
    );
}

export default App;
