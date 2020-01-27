import React from "react";
import "./App.css";
import Menu from './components/Dropdown';
import StarWarsCharacters from "./components/StarWarsCharacters";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
          width="300"
          alt="logo"
        />
      </header>
      <Menu />
      <StarWarsCharacters />
    </div>
  );
}

export default App;
