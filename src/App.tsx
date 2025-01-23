import React, { useState } from "react";

// 컴포넌트 import
import Navbar from "./components/NavBar";
import Menu from "./pages/Menu";
import AddMenuForm from "./pages/AddMenuForm";

import "./App.css";

// Drink 타입 정의
interface Drink {
  name: string;
  price: string;
  alt: string;
}

// Navbar의 props 타입 정의
interface NavbarProps {
  activeMenu: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}

// Menu의 props 타입 정의
interface MenuProps {
  drinks: Drink[];
}

// AddMenuForm의 props 타입 정의
interface AddMenuFormProps {
  addDrink: (newDrink: Drink) => void;
}

function App() {
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const [drinks, setDrinks] = useState<Drink[]>([
    { name: "라떼 아트임", price: "4000", alt: "라떼 아트 1" },
    { name: "라떼 아트임", price: "100000", alt: "라떼 아트 2" },
    { name: "라떼 아트임", price: "20000", alt: "라떼 아트 3" },
    { name: "라떼 아트임", price: "10", alt: "라떼 아트 4" },
    { name: "라떼 아트임", price: "1BTC", alt: "라떼 아트 5" },
    { name: "라떼 아트임", price: "1ETH", alt: "라떼 아트 6" },
  ]);

  const addDrink = (newDrink: Drink) => {
    setDrinks([...drinks, newDrink]);
  };

  const menuItems = ["home", "menu", "temporary"];
  
  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <img src="/CPLOGO.png" alt="로고" />
          Const Future
        </div>
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuItems={menuItems}/>
        <button className="login-button">로그인</button>
      </header>
      <Menu drinks={drinks} />
      <AddMenuForm addDrink={addDrink} />
    </div>
  );
}

export default App;
