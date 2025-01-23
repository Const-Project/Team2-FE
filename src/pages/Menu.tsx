import React from "react";
import "./Menu.css";
import { MenuProps } from "../components/Types";

// // ✅ MenuProps 인터페이스 추가
// interface MenuProps {
//     drinks: Drink[];
// }

const Menu: React.FC<MenuProps> = ({ drinks }) => {
    return (
        <div className="menu">
            {drinks.map((drink, index) => (
                <div key={index} className="menu-item">
                {/* ✅ 이미지 대신 alt 텍스트 사용 */}
                <div className="menu-image">{drink.alt}</div>
                <h3>{drink.name}</h3>
                <p>{drink.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Menu;
