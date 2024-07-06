import './App.css';
import {useEffect, useState} from "react";

function App() {
    return (
        <a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false'
                 renderer='antialias: true; alpha: true'>
            <a-camera gps-new-camera='gpsMinDistance: 150'></a-camera>
            <a-entity material='color: red' geometry='primitive: box'
                      gps-entity-place="latitude: 50.478997; longitude: 30.434987" scale="10 10 10"></a-entity>
        </a-scene>
    );
}

export default App;
