

import { Car, Search } from "lucide-react";
import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom";
import RecipeCarousel from "../components/carousel";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState("");

    // Filter recipes based on search query
    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.desc.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/recipes/`, {
            // headers: {
            //     Authorization: `Token ${token}`
            // }
        })
            .then(res => res.json())
            .then(data => {


                if (Array.isArray(data)) {
                    setRecipes(data);
                } else if (data.data && Array.isArray(data.data)) {
                    setRecipes(data.data);
                } else if (data.results && Array.isArray(data.results)) {
                    setRecipes(data.results);
                } else {

                    setRecipes([]);
                }
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
                setRecipes([]);
            });
    }, [])

    return (
        <>
            <div>
                <RecipeCarousel />
            </div>
            <div className="d-flex justify-content-center w-100">

                <form className="d-flex p-3 m-2 w-full" role="search" onSubmit={(e) => e.preventDefault()}>
                    <input className="form-control me-2 .col-100 .col-md-100" type="search" placeholder="Search recipes..." aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button className="btn btn-outline-success d-flex justify-content-center " type="submit"> <Search size={20} className="m-1 sm:w-50" />  <p className="m-1">Search</p></button>
                </form>
            </div>

            <h1 className="text-center">Here are our Recipe list</h1>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        {filteredRecipes.map((recipe) => (
                            <div className="col" key={recipe.id}>
                                <div className="card shadow-sm">
                                    <div>
                                        <img src={recipe.image} className="card-img-top
                                        
                                        " alt="food img" />
                                    </div>

                                    <div className="card-body">
                                        <h4>{recipe.title}</h4>
                                        <p className="card-text">{recipe.desc}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" ><Link to={`/recipes/${recipe.id}`} className="text-decoration-none text-dark">Let's cook</Link></button>
                                            </div>
                                            <small className="text-body-secondary"></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {filteredRecipes.length === 0 && (
                            <h3>No recipes found.</h3>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home