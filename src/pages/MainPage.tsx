import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Menu from "./Menu";  // ✅ Menu 컴포넌트 추가
import "./MainPage.css";

// ✅ Drink 타입 추가
interface Drink {
    name: string;
    price: string;
    alt: string;
}

const MainPage = () => {
    const [activeMenu, setActiveMenu] = useState("home");
    const menuItems = ["Home", "Menu", "About", "Temporary"];

    // ✅ 음료 데이터 추가
    const [drinks, setDrinks] = useState<Drink[]>([
        { name: "라떼 아트임", price: "4000", alt: "라떼 아트 1" },
        { name: "라떼 아트임", price: "100000", alt: "라떼 아트 2" },
        { name: "라떼 아트임", price: "20000", alt: "라떼 아트 3" },
        { name: "라떼 아트임", price: "10", alt: "라떼 아트 4" },
        { name: "라떼 아트임", price: "1BTC", alt: "라떼 아트 5" },
        { name: "라떼 아트임", price: "1ETH", alt: "라떼 아트 6" },
    ]);

    return (
        <div>
            <Navbar activeMenu={activeMenu} setActiveMenu={setActiveMenu} menuItems={menuItems} />
            <header className="header">
                <h1 className="title">음료 메뉴</h1>
            </header>
            <main className="main">
                {activeMenu === "menu" && <Menu drinks={drinks} />}
            </main>
        </div>
    );
};

export default MainPage;
