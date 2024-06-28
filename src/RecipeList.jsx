const RecipeList = ({cakeList}) => {

    return (
        <>
            <section>
                {
                    cakeList.map((cake, index) => {
                        return(
                            <div key={index}>
                                <h3>{cake.cakeName}</h3>
                                <ul>
                                    {cake.ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index}>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
            <section>
                <h4>Average cake rating: </h4>
                <p>{(cakeList.reduce((total, cake) => total + cake.rating, 0) / cakeList.length)}</p>
            </section>
        </>
    )

}

export default RecipeList;