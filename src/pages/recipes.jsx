
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/recipes/${id}/`).then(res => res.json()).then(data => setRecipe(data));
    }, [id])
    if (!recipe) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="container py-4">
                <Link to="/" className="btn btn-link mb-3">
                    ← Back
                </Link>

                <h1 className="mb-3">{recipe.title}</h1>

                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="img-fluid rounded mb-4"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                />
                <div className="d-flex">
                    <h4>Ingredients</h4>
                    {recipe.ingredients ? (
                        <pre className="bg-light p-3 rounded fs-5">{recipe.ingredients}</pre>
                    ) : (
                        <p>No ingredients available</p>
                    )}

                    <h4>Instructions</h4>
                    {recipe.instruction ? (
                        <ol>
                            {recipe.instruction.split('\n').filter(step => step.trim()).map((step, index) => (
                                <li key={index}>{step.trim()}</li>
                            ))}
                        </ol>
                    ) : (
                        <p>No instructions available</p>
                    )}
                </div>

            </div>
        </>
    )
}

export default Recipe