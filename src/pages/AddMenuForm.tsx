// AddMenuForm.tsx
import React, { useState } from "react";

// Drink 타입 정의
interface Drink {
    name: string;
    price: string;
    alt: string;
}

// AddMenuForm의 props 타입 정의
interface AddMenuFormProps {
    addDrink: (newDrink: Drink) => void;
}

const AddMenuForm: React.FC<AddMenuFormProps> = ({ addDrink }) => {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [alt, setAlt] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && price && alt) {
        const newDrink: Drink = { name, price, alt };
        addDrink(newDrink);
        setName("");
        setPrice("");
        setAlt("");
    } else {
        alert("모든 필드를 입력하세요.");
    }
    };

    return (
    <form onSubmit={handleSubmit} className="add-menu-form">
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="음료 이름"
        required
        />
        <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="가격"
        required
        />
        <input
        type="text"
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
        placeholder="설명"
        required
        />
        <button type="submit">추가</button>
    </form>
    );
};

export default AddMenuForm;
