import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>header</h1>
      </header>
      <div id="tileContainer">
        <div className="appTile" id="predictionsTile">
          <div id="header1">Guess</div>
          <div id="header2">to Impress</div>
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
          <img src="jmcs_smaller.png" alt="JMCS" />
        </div>
      </div>
    </div>
  );
}

export default App;
