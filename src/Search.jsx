import { useState } from "react";

const Search = ({ cakeList }) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [filteredCakes, setFilteredCakes] = useState([]);

    const filterCakes = (e) => {

        if(searchTerm === ""){
            setFilteredCakes(null)
        }
        e.preventDefault()
        const searchTermLower = searchTerm.toLowerCase()
        const filteredCakeList = cakeList.filter((cake) => cake.cakeName.toLowerCase().includes(searchTermLower))
        setFilteredCakes(filteredCakeList)
    }


    return(
        <>
            <form onSubmit={filterCakes}>
                <label htmlFor="search-field">Search for a cake:</label>
                <input type="text" id="search-field" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <input type="submit" />
            </form>
            <section>
                <h4>Filtered Cakes: {searchTerm}</h4>
                {filteredCakes.map((cake, index) => (
                    <div key={index}>
                        <h3>{cake.cakeName}</h3>
                        <ul>
                            {cake.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </>
        
    )

}

export default Search;