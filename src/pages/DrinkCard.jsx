import React from "react";
import "./DrinkCard.css";

function DrinkCard({ name, price, alt }) {
    return (
    <div className="drink-card">
        <div className="drink-image" role="img" aria-label={alt}></div>
        <div className="drink-info">
        <h3>{name}</h3>
        <p>{price}원</p>
        </div>
    </div>
    );
}

export default DrinkCard;
