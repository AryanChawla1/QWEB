import './App.css';

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="header">
          <button id="create-account" className="header-option">Create Account</button>
          <button id="sign-up" className="header-option">Sign Up</button>
        </div>
        <div className="menu">
          <h1 id="torus" className="title">Torus</h1>
          <h1 id="puzzle" className="title">Puzzle</h1>
          <button id="classic" className="menu-option">Classic</button>
          <button id="daily" className="menu-option">Daily</button>
        </div>
        <div className="board">
          <p className="tiles">1</p>
          <p className="tiles">2</p>
          <p className="tiles">3</p>
          <p className="tiles">4</p>
          <p className="tiles">5</p>
          <p className="tiles">6</p>
          <p className="tiles">7</p>
          <p className="tiles">8</p>
          <p className="tiles">9</p>
        </div>
      </div>
    </div>
  );
}

export default App;
