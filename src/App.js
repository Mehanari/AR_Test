import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <a-scene
            vr-mode-ui="enabled: false"
            arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;"
        >
          <a-text
              value="This content will always face you."
              look-at="[gps-camera]"
              scale="120 120 120"
              gps-entity-place="latitude: <50,4897373>; longitude: <30,4871598>;"
          ></a-text>
          <a-camera gps-camera rotation-reader></a-camera>
        </a-scene>
      </div>
  );
}

export default App;
