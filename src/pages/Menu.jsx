import React from "react";
import DrinkCard from "./DrinkCard";
import "./Menu.css";

function Menu() {
    const drinks = [
    { name: "라떼 아트임", price: "4000", alt: "라떼 아트 1" },
    { name: "라떼 아트임", price: "100000", alt: "라떼 아트 2" },
    { name: "라떼 아트임", price: "20000", alt: "라떼 아트 3" },
    { name: "라떼 아트임", price: "10", alt: "라떼 아트 4" },
    { name: "라떼 아트임", price: "1BTC", alt: "라떼 아트 5" },
    { name: "라떼 아트임", price: "1ETH", alt: "라떼 아트 6" },
    ];

    return (
    <div className="menu">
        {drinks.map((drink, index) => (
        <DrinkCard key={index} name={drink.name} price={drink.price} alt={drink.alt} />
        ))}
    </div>
    );
}

export default Menu;
