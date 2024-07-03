import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <a-scene
              vr-mode-ui="enabled: false"
              arjs='sourceType: webcam;'
              renderer='antialias: true; alpha: true'>
              <a-camera gps-camera rotation-reader></a-camera>
              <a-box gps-entity-place='latitude: 50.489921; longitude: 30.486889' color='red'
                     scale='20 20 20'></a-box>
          </a-scene>
      </div>
  );
}

export default App;
