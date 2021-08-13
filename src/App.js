import logo from './Card_Saver.svg';
import './App.css';
import {} from 'react-router-dom';
import { CardSaver } from './Components/CardSaver';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CardSaver />

        <div className="toggle-container-1">
          <label class="switch-1"><input type="checkbox" />    <div></div>
          </label>
        </div>

        <div className="toggle-container-2">
          <label class="switch-2"><input type="checkbox" />    <div></div>
          </label>
        </div>

        <div className="toggle-container-3">
          <label class="switch-3"><input type="checkbox" />    <div></div>
          </label>
        </div>
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>

      <div>
        <p className="Card-deactivate">Enable Directions</p>
      </div>

      <div>
        <p className="Anti-theft">Anti-Theft Mode</p>
      </div>

      <div>
        <p className="Tracking">Disable Tracking</p>
      </div>

      <button className="Contact-support">
        Contact Support
      </button>

      <button className="Remove-card">
        Change Settings
      </button>
    </div>
  );
}

export default App;