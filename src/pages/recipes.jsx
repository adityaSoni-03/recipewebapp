import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("No recipe ID provided");
            setLoading(false);
            return;
        }

        fetch(`http://127.0.0.1:8000/api/recipes/${id}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setRecipe(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (error) {
        return <h1 className="container py-5 text-danger">Error: {error}</h1>;
    }

    if (loading || !recipe) {
        return <h1 className="container py-5 text-center">Loading...</h1>;
    }

    return (
        <div className="bg-light min-vh-100">
            <div className="container py-5">

                <Link to="/" className="btn btn-outline-secondary mb-4">
                    ← Back to Recipes
                </Link>

                {/* Recipe Card */}
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

                    {/* Hero Image */}
                    <div style={{ position: "relative" }}>
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-100"
                            style={{ height: "400px", objectFit: "cover" }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                                padding: "20px",
                                color: "white"
                            }}
                        >
                            <h1 className="fw-bold">{recipe.title}</h1>
                        </div>
                    </div>

                    <div className="card-body p-5">

                        {/* Ingredients */}
                        <h3 className="mb-3 text-primary">🧂 Ingredients</h3>
                        {recipe.ingredients ? (
                            <ul className="list-group list-group-flush mb-5">
                                {recipe.ingredients
                                    .split("\n")
                                    .filter(item => item.trim())
                                    .map((item, index) => (
                                        <li
                                            key={index}
                                            className="list-group-item border-0 ps-0 fs-5"
                                        >
                                            ✔ {item}
                                        </li>
                                    ))}
                            </ul>
                        ) : (
                            <p>No ingredients available</p>
                        )}

                        {/* Instructions */}
                        <h3 className="mb-3 text-success">👨‍🍳 Instructions</h3>
                        {recipe.instruction ? (
                            <div className="timeline">
                                {recipe.instruction
                                    .split("\n")
                                    .filter(step => step.trim())
                                    .map((step, index) => (
                                        <div
                                            key={index}
                                            className="d-flex mb-3"
                                        >
                                            <div
                                                className="badge bg-success rounded-circle me-3"
                                                style={{
                                                    width: "35px",
                                                    height: "35px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                            <div className="fs-5">
                                                {step}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        ) : (
                            <p>No instructions available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
