import logo from './Capital_One_logo.svg';
import './App.css';
import {} from 'react-router-dom';
import { MapContainer } from './MapContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MapContainer />

        <p>
          Card Saver
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
  );
}

export default App;
