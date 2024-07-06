import './App.css';
import {useState} from "react";

function App() {

  const [testEntityAdded, setTestEntityAdded] = useState(false);

  //gps-camera-update-position handler
  const onCameraUpdate = e => {
      alert('onCameraUpdate')
      if(!testEntityAdded) {
          console.log(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
          // Add a box to the north of the initial GPS position
          const entity = document.createElement("a-box");
          entity.setAttribute("scale", "1 1 1");
          entity.setAttribute('material', 'color: \'red\'');
          entity.setAttribute('gps-new-entity-place',
                `latitude: ${e.detail.position.latitude + 0.001}; longitude: ${e.detail.position.longitude}`);
          document.querySelector("a-scene").appendChild(entity);
          setTestEntityAdded(true);
      }
  }

  return (
      <div className="App">
          <a-scene
              vr-mode-ui="enabled: false"
              arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false; '
              renderer='logarithmicDepthBuffer: true; antialias: true; alpha: true'>
              <a-camera gps-new-camera='gpsMinDistance: 50' gps-camera-update-position={onCameraUpdate} ></a-camera>

          </a-scene>
      </div>
  );
}

export default App;
