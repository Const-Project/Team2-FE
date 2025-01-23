// App.tsx (리팩토링 후)
import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Menu from "./pages/Menu";
import AddMenuForm from "./pages/AddMenuForm";
import { Drink } from "./components/Types";
import { initialDrinks } from "./data/Drinks";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const [drinks, setDrinks] = useState<Drink[]>(initialDrinks);

  const addDrink = (newDrink: Drink) => {
    setDrinks([...drinks, newDrink]);
  };

  const menuItems = ["Home", "Menu", "About", "Temporary"];

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/CPLOGO.png" alt="로고" />
          Const Future
        </div>
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuItems={menuItems} />
        <button className="login-button">LOGIN</button>
      </header>
      <Menu drinks={drinks} />
      <AddMenuForm addDrink={addDrink} />
    </div>
  );
}

export default App;