import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <a-scene
              vr-mode-ui="enabled: false"
              arjs='sourceType: webcam;'
              renderer='antialias: true; alpha: true'>
              <a-box gps-projected-entity-place='latitude: 50.489921; longitude: 30.486889' material='color: red'
                     scale='10 10 10'></a-box>
              <a-camera gps-projected-camera
                        rotation-reader></a-camera>
          </a-scene>
      </div>
  );
}

export default App;
