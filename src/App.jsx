import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Menu from "./pages/Menu.jsx";
import AddMenuForm from "./pages/AddMenuForm.jsx";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("home");
  const [drinks, setDrinks] = useState([
    { name: "라떼 아트임", price: "4000", alt: "라떼 아트 1" },
    { name: "라떼 아트임", price: "100000", alt: "라떼 아트 2" },
    { name: "라떼 아트임", price: "20000", alt: "라떼 아트 3" },
    { name: "라떼 아트임", price: "10", alt: "라떼 아트 4" },
    { name: "라떼 아트임", price: "1BTC", alt: "라떼 아트 5" },
    { name: "라떼 아트임", price: "1ETH", alt: "라떼 아트 6" },
  ]);

  const addDrink = (newDrink) => {
    setDrinks([...drinks, newDrink]);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="../public/CPLOGO.png" alt="로고" />
          Const Future
        </div>
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <button className="login-button">로그인</button>
      </header>
      <Menu drinks={drinks} />
      <AddMenuForm addDrink={addDrink} />
    </div>
  );
}

export default App;
