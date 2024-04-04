import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola profe <a className="App-link" href="https://www.linkedin.com/in/antonio-gallardo/"
                        target="_blank" rel="noopener noreferrer">Antonio</a>
        </p>
      </header>
    </div>
  );
}

export default App;
