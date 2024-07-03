import './App.css';

function App() {
  return (
      <div className="App">
          <a-scene
              vr-mode-ui="enabled: false"
              arjs='sourceType: webcam;'
              renderer='antialias: true; alpha: true'>
              <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
              <a-entity material='color: red'
                        geometry='primitive: box'
                        gps-new-entity-place="latitude: 50.8843233; longitude: 20.6347007"
                        scale="10 10 10"></a-entity>
          </a-scene>
      </div>
  );
}

export default App;
