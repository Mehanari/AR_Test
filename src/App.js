import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
        <a-scene
            embedded
            loading-screen="enabled: false;"
            arjs="sourceType: webcam; debugUIEnabled: false;"
        >
          <a-text
              value="This content will always face you."
              look-at="[gps-camera]"
              scale="120 120 120"
              gps-entity-place="latitude: 50.489722; longitude: 30.485833;"
          ></a-text>
          <a-camera gps-camera rotation-reader></a-camera>
        </a-scene>
      </div>
  );
}

export default App;
