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
              <a-entity
                  position="0 0 0"
                  scale="1 1 1"
                  gltf-model="https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
                  gps-entity-place="latitude: 50.489923; longitude: 30.486881;"
              ></a-entity>
              <a-camera gps-camera rotation-reader></a-camera>
          </a-scene>
      </div>
  );
}

export default App;
