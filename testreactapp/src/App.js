import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login/Login'

function App() {
  const [loginNow, setLoginShow] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <label for="checkLogin"><input type='checkbox' id="checkLogin"
          onChange={(e) => setLoginShow(e.target.checked)} />Show Login</label>
        {loginNow === true && (<Login />)}
        <h1>Welcome Anurag!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;