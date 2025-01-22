import React from "react";
import DrinkCard from "./DrinkCard";
import "./Menu.css";

function Menu({ drinks }) {
    return (
    <div className="menu">
        {drinks.map((drink, index) => (
        <DrinkCard
            key={index}
            name={drink.name}
            price={drink.price}
            alt={drink.alt}
        />
        ))}
    </div>
    );
}

export default Menu;
