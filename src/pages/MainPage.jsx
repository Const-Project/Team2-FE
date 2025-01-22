import React from "react";
import Navbar from "../components/Navbar"; 
import "./MainPage.css"; 

const MainPage = () => {
    const menuItems = ["Home", "Menu", "TEMPORARY"];
    return (
    <div>
        <Navbar menuItems={menuItems} />
        <header className="header">
        <h1 className="title">음료 메뉴</h1>
        </header>
        <main className="main">
        <div className="grid-container">
            {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="card">
                <img
                src=""
                alt="음료 이미지"
                className="image"
                />
                <p className="name">라떼아트임</p>
              <p className="price">{index % 3 === 0 ? "4000" : index * 100000}</p>
            </div>
            ))}
        </div>
        </main>
        <footer className="footer">
        <button className="scroll-button">▼</button>
        <p className="scroll-text">스크롤</p>
        </footer>
    </div>
    );
};

export default MainPage;
