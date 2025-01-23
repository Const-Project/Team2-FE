// components/Navbar.tsx
import React from "react";
import { NavbarProps } from "../components/Types";
import "./NavBar.css";

const Navbar: React.FC<NavbarProps> = ({ activeMenu, setActiveMenu, menuItems }) => {
    return (
    <nav className="navbar">
        {menuItems.map((item) => (
        <button
            key={item}
            className={`nav-button ${activeMenu === item ? "active" : ""}`} // ✅ 수정
            onClick={() => setActiveMenu(item)}
        >
            {item}
        </button>
        ))}
    </nav>
    );
};

export default Navbar;