import React, { useState } from "react";
import "./AddMenuForm.css";

function AddMenuForm({ addDrink }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [alt, setAlt] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price && alt) {
        addDrink({ name, price, alt });
        setName("");
        setPrice("");
        setAlt("");
    } else {
        alert("모든 필드를 입력해주세요!");
    }
    };

    return (
    <form className="add-menu-form" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="메뉴 이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type="text"
        placeholder="가격 (예: 4000)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
        <input
        type="text"
        placeholder="이미지 설명"
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
        />
        <button type="submit">메뉴 추가</button>
    </form>
    );
}

export default AddMenuForm;
