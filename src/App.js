import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="page-bg"></div>

      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
      </div>

      <div class="page-wrapper">
        <h1>CSS Particles</h1>
      </div>

      <header className="App-header">
        <h1>header</h1>
      </header>
      <div id="tileContainer">
        <div className="appTile" id="predictionsTile">
          <a href="https://predictions.jonmulhern.co.uk">
            <div id="header1">Guess</div>
            <div id="header2">to Impress</div>
          </a>
        </div>
        <div className="appTile">
          <img src="chords.png" alt="Piano Chord Practice Game" />
          <img
            className="comingSoon"
            src="comingsoon.png"
            alt="Chord practice game coming soon!"
          />
        </div>

        <div className="appTile">
          <img src="bird.png" alt="Birdbox Livestream" />
          <img
            className="comingSoon"
            src="comingsoon.png"
            alt="Birdbox Livestream coming soon!"
          />
        </div>
        <div className="appTile">
          <a href="https://jmcs.jonmulhern.co.uk">
            ≈
            <img src="jmcs_smaller.png" alt="JMCS" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
