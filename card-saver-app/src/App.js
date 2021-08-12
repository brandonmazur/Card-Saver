import logo from './Card_Saver.svg';
import './App.css';
import {} from 'react-router-dom';
import { MapContainer } from './MapContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <MapContainer />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>

    </div>
  );
}

export default App;
