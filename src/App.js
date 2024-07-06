import './App.css';
import {useEffect, useState} from "react";

function App() {
    return (
        <a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false'
                 renderer='antialias: true; alpha: true'>
            <a-camera gps-new-camera='gpsMinDistance: 150'></a-camera>
            <a-entity material='color: red' geometry='primitive: box'
                      gps-new-entity-place="latitude: 50.473899; longitude: 30.443537" scale="100 100 100"></a-entity>
        </a-scene>
    );
}

export default App;
