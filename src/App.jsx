import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Menu from "./pages/Menu.jsx";
import "./App.css";

function App() {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="App">
      <header className="header">
        <div className="logo"><img src="../public/CPLOGO.png"></img>Const Future</div>
        <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <button className="login-button">로그인</button>
      </header>
      <Menu />
    </div>
  );
}

export default App;
