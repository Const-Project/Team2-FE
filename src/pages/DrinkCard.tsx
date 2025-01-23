import React from "react";
import "./DrinkCard.css";

// props의 타입 정의
interface DrinkCardProps {
    name: string;
    price: number;
    alt: string;
}

function DrinkCard({ name, price, alt }: DrinkCardProps) {
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
