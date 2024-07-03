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
                        gps-new-entity-place="latitude: 50.473186; longitude: 30.443543"
                        scale="10 10 10"></a-entity>
              <a-sphere color="yellow"
                        radius="5"
                        gps-new-entity-place="latitude: 50.473353; longitude: 30.443280"
              ></a-sphere>
          </a-scene>
      </div>
  );
}

export default App;
