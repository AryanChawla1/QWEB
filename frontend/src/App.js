import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header_menu">
        <button className="header">Create Account</button>
        <button className="header">Sign In</button>
      </div>
      <div id="splash">
        <h1 className="title">Torus</h1>
        <h1 className="title">Puzzle</h1>
        <div className="menu_options">
          <button id="classic" className="menu">Classic</button>
          <button id="daily" className="menu">Daily</button>
        </div>
      </div>
    </div>
  );
}

export default App;
