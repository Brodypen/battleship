import React from 'react';
import logo from './logo.svg';
import Game from './components/Game';
import Header from './components/header/Header';
import DarkModeToggle from './components/header/DarkModeToggle';
function App() {
 

  return (
      <div className="App h-screen bg-white dark:bg-slate-900 flex flex-col">
          <Header/>
          <Game/>
      </div>
  );
}

export default App;

