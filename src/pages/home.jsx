

import { Search } from "lucide-react";
import { useState, useEffect } from "react"
import { useNavigate,Link } from "react-router-dom";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [query,setQuery]=useState("");
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/recipes/?q=${query}`).then(res => res.json()).then(data => setRecipes(data))
    }, [query])
    
    return (
        <>


            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../public/photos/chicken.jpg" className="d-block w-100" style={{ height: '600px', objectFit: 'fill' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block text-white">
                            <h3 className="my-0 fs-2">Chicken Biryani!</h3>
                            <p className="fs-4"><a href="/recipe/1" className="text-white fs-4">Click here</a> to cook this.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../public/photos/2.jpg" className="d-block w-100" style={{ height: '600px', objectFit: 'cover' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Italian Pasta</h3>
                            <p className="fs-4"><a href="/" className="text-white fs-4">Click here</a> to cook this.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../public/photos/1.webp" className="d-block w-100" style={{ height: '600px', objectFit: 'cover' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Butter chicken with naan!</h3>
                            <p className="fs-4"><a href="/recipes" className="text-white fs-4">Click here</a> to cook this.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="d-flex justify-content-center w-100">

                <form className="d-flex p-3 m-2 w-50" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search recipes..." aria-label="Search" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    <button className="btn btn-outline-success d-flex justify-content-center " type="submit"> <Search size={20} className="m-1" />  <p className="m-1">Search</p></button>
                </form>
            </div>

            <h1 className="text-center">Here are our Recipe list</h1>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        {recipes.map((recipe) => (
                            <div className="col" key={recipe.id}>
                                <div className="card shadow-sm">
                                    <img src={recipe.image} className="card-img-top" alt="Dosa" />
                                    <div className="card-body">
                                        <h4>{recipe.title}</h4>
                                        <p className="card-text">{recipe.desc}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" ><Link to={`/recipe/${recipe.id}`} className="text-decoration-none text-dark">Let's cook</Link></button>
                                            </div>
                                            <small className="text-body-secondary"></small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {recipes.length===0 && (
                            <h3>No recipes found.</h3>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home