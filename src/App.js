import logo from "./logo.svg";
import "./App.css";
import "./background.scss";
import "./header.scss";

function App() {
  return (
    <div className="App">
      <div className="page-bg"></div>

      <div className="animation-wrapper">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <header className="App-header">
        <div className="title">
          <h1>mulhern's junkyard</h1>
        </div>
      </header>
      <div id="tileContainer">
        <div className="appTile" id="predictionsTile" onClick={() => window.alert('Coming back soon! This thing was costing £30 a month to host. I will rebuild it before the year is up to one that wont cost a load to run. Give me a text if you want to know how your predictions are doing!')}>
          {/* <a href="https://predictions.jonmulhern.co.uk/index"> */}
          <a href='/comingbacksoon.js'>
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
          <a href="https://youtube.com/channel/UC0r-PpXIiVJl2lczsqwiJ8w/live">
            <img src="bird.png" alt="Birdbox Livestream" />
          </a>
        </div>
        <div className="appTile">
          <a href="https://jmcs.jonmulhern.co.uk">
            <img src="jmcs_smaller.png" alt="JMCS" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
