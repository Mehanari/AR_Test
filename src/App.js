import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <a-scene
              vr-mode-ui="enabled: false"
              arjs='sourceType: webcam; debugUIEnabled: false;'>
              
              <a-box material="color: red;" scale="25 25 25"
                     gps-entity-place="latitude: 44.504493; longitude: 11.301134;"></a-box>

              <a-box material="color: yellow;" scale="25 25 25"
                     gps-entity-place="latitude: 44.506477; longitude: 11.301524;"></a-box>
              
              <a-box material="color: green;" scale="25 25 25"
                     gps-entity-place="latitude: 44.500013; longitude: 11.277351;"></a-box>

              <a-camera
                  rotation-reader
                  gps-camera="simulateLatitude: 44.504348; simulateLongitude: 11.301027; minDistance: 50; maxDistance: 700;"
              >
              </a-camera>
          </a-scene>
      </div>
  );
}

export default App;
