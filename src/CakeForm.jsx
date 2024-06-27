import { useState } from "react";


const CakeForm = ( {handleCake} ) => {

    const [cakeName, setCakeName] = useState("")
    const [ingredients, setIngredients] = useState("")    
    const [rating, setRating] = useState(1)    

    const handleSubmit = (e) => {
        e.preventDefault()

        const ingredientsList = ingredients.split(",").map((ingredient) => ingredient.trim())

        const newCake = {cakeName, ingredientsList, rating}

        handleCake(newCake)
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Cake Name:</label>
            <input type="text" id="name" value={cakeName} onChange={(e) => setCakeName(e.target.value)}/>
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea cols="30" rows="1" id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)}></textarea>
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" min={1} max={5} value={rating} onChange={(e) => setRating(e.target.value)}/>
            <input type="submit"/>
        </form>
    )

}

export default CakeForm;