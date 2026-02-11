
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    console.log('URL Params:', { id });
    
    useEffect(() => {
        if (!id) {
            setError('No recipe ID provided');
            setLoading(false);
            return;
        }
        
        setLoading(true);
        fetch(`http://127.0.0.1:8000/api/recipes/${id}/`)
            .then(res => {
                console.log('Response status:', res.status);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log('API Response for recipe:', data);
                setRecipe(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching recipe:', error);
                setError(error.message);
                setLoading(false);
            });
    }, [id])
    
    if (error) {
        return <h1 className="container py-4">Error: {error}</h1>
    }
    
    if (loading || !recipe) {
        return <h1 className="container py-4">Loading...</h1>
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
                <div>
                <h4>Ingredients</h4>
                {recipe.ingredients ? (
                    <div className="bg-light p-3 rounded fs-5 mb-4" style={{whiteSpace: 'pre-wrap'}}>
                        {recipe.ingredients}
                    </div>
                ) : (
                    <p>No ingredients available</p>
                )}

                <h4>Instructions</h4>
                {recipe.instruction ? (
                    <ol className="mb-4">
                        {recipe.instruction.split('\n').filter(step => step.trim()).map((step, index) => (
                            <li key={`step-${index}-${step.slice(0, 10)}`}>{step.trim()}</li>
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