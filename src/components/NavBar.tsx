import React from "react";
import "./NavBar.css";

// NavbarProps에 menuItems 추가
interface NavbarProps {
    activeMenu: string;
    setActiveMenu: (menu: string) => void;
    menuItems: string[];  // menuItems prop 추가
}

const Navbar: React.FC<NavbarProps> = ({ activeMenu, setActiveMenu, menuItems }) => {
    return (
        <nav>
            {menuItems.map((menu) => (
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
};

export default Navbar;
