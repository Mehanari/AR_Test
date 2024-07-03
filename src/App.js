import './App.css';

function App() {
  return (
      <div className="App">
          <a-scene
              vr-mode-ui="enabled: false"
              arjs='sourceType: webcam;'
              renderer='logarithmicDepthBuffer: true; antialias: true; alpha: true'>
              <a-camera gps-new-camera='gpsMinDistance: 150'></a-camera>
              <a-entity material='color: red'
                        geometry='primitive: box'
                        gps-projected-entity-place="latitude: 50.473257; longitude: 30.443317"
                        scale="10 10 10"></a-entity>
          </a-scene>
      </div>
  );
}

export default App;
