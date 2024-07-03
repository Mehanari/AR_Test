import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <a-scene embedded arjs='sourceType: webcam;' renderer='antialias: true; alpha: true; precision: medium;'>

              <a-box material="color: red;" scale="5 5 5"
                     gps-entity-place="latitude: 50.489921; longitude: 30.486889;"></a-box>
              <a-camera
                  rotation-reader
                  gps-camera
              >
              </a-camera>
          </a-scene>
      </div>
  );
}

export default App;
