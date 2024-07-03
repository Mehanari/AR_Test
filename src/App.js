import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <a-scene embedded arjs='sourceType: webcam;' renderer='antialias: true; alpha: true; precision: medium;'>

              <a-marker preset="hiro">
                  <a-sphere position="0 0.5 0" radius="0.5" color="#EF2D5E"></a-sphere>
                  <a-plane position="0 0 0" rotation="-90 0 0" width="1" height="1" color="#7BC8A4"></a-plane>
              </a-marker>

              <a-entity camera></a-entity>
          </a-scene>
      </div>
  );
}

export default App;
