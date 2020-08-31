import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import Topbar from './topbar/topbar'
import Main from './mainPage/main';

function App() {
  return (
    <div className="App">
      <Topbar />
      <Main />
    </div>
  );
}

export default App;
