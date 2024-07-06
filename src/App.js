import './App.css';

function App() {
  return (
      <div className="App">
          <a-scene
              vr-mode-ui="enabled: false"
              arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false; '
              renderer='logarithmicDepthBuffer: true; antialias: true; alpha: true'>
              <a-camera gps-new-camera='gpsMinDistance: 50'></a-camera>
              <a-entity material='color: red'
                        geometry='primitive: box'
                        gps-new-entity-place="latitude: 50.473186; longitude: 30.443543"
                        scale="10 10 10"></a-entity>
              <a-sphere color="yellow"
                        radius="5"
                        gps-new-entity-place="latitude: 50.473942; longitude: 30.443548"
              ></a-sphere>
          </a-scene>
      </div>
  );
}

export default App;
