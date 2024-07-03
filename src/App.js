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
              <a-camera gps-camera='simulateLatitude: 51.049; simulateLongitude: -0.723' rotation-reader></a-camera>
              <a-text value="This will always face the user." look-at="[gps-camera]" scale="75 75 75"
                      gps-entity-place="latitude: 51.0491; longitude: -0.723;"></a-text>
          </a-scene>
      </div>
  );
}

export default App;
