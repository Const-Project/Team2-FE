import React from "react";
import "./Navbar.css";

function Navbar({ activeMenu, setActiveMenu }) {
    const menus = ["home", "menu", "temporary"];
    
    return (
    <nav className="navbar">
        {menus.map((menu) => (
        <button
            key={menu}
            className={`nav-button ${activeMenu === menu ? "active" : ""}`}
            onClick={() => setActiveMenu(menu)}
        >
            {menu.charAt(0).toUpperCase() + menu.slice(1)}
        </button>
        ))}
    </nav>
    );
}

export default Navbar;
