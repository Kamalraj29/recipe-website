import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../App.css";
const CreateRecipe = ({ setIsLoggedIn }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [imageurl, setImageurl] = useState("");
    const [cookingtime, setCookingtime] = useState("");
    const navigate = useNavigate();


    const handleCreate = async () => {
        const res = await axios.post("http://localhost:3000/create", { name, description, ingredients, imageurl, cookingtime });
        localStorage.setItem("username", res.data.username);
        setIsLoggedIn(true);
        navigate("/home");
    };
    return (
        <div className="container">
            <h2>Create Recipe</h2>
            <input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input type="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input type="ingredients" placeholder="Ingredients" onChange={(e) => setIngredients(e.target.value)} />
            <input type="imageurl" placeholder="Image Url" onChange={(e) => setImageurl(e.target.value)} />
            <input type="cookingtime" placeholder="Cooking Time" onChange={(e) => setCookingtime(e.target.value)} />
            <button onClick={handleCreate}>Create Recipe</button>
        </div>
    );
};
export default CreateRecipe;