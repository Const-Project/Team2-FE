// AddMenuForm.tsx
import React, { useState } from "react";
import { AddMenuFormProps, Drink } from "../components/Types";

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
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" />
            <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="가격" />
            <input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="설명" />
            <button type="submit">추가</button>
        </form>
    );
};
    

export default AddMenuForm;
