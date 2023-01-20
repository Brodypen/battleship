import React from "react";
import logo from "./logo.svg";
import Game from "./components/gameWindow/Game";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App h-screen bg-slate-900 flex flex-col">
      <Header />
      <Game />
      <footer></footer>
    </div>
  );
}

export default App;
