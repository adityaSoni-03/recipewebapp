

function Home() {
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
                        <img src="../public/photos/1.webp" className="d-block w-100" style={{ height: '600px', objectFit: 'fill' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block text-white">
                            <h3 className="my-0 fs-2">Butter chicken with Naan!</h3>
                            <p className="fs-4"><a href="/" className="text-white fs-4">Click here</a> to cook this.</p>
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
                        <img src="../public/photos/3.jpg" className="d-block w-100" style={{ height: '600px', objectFit: 'cover' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Chicken biryani</h3>
                            <p className="fs-4"><a href="/" className="text-white fs-4">Click here</a> to cook this.</p>
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
            <h1 className="text-center">Select from a range of recipes</h1>
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="../public/photos/4.jpg" className="card-img-top" alt="Dosa" />
                                <div className="card-body">
                                    <p className="card-text">Check out our homemade Dosa recipe specially made from south india.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Lets cook!</button>
                                        </div>
                                        <small className="text-body-secondary"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="../public/photos/5.jpg" className="card-img-top" alt="Pizza" />
                                <div className="card-body">
                                    <p className="card-text">Check out this delicious italian-style pizza recipe which is same as the first pizza ever made.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Lets cook!</button>
                                        </div>
                                        <small className="text-body-secondary"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src="../public/photos/6.jpg" className="card-img-top" alt="Sushi" />
                                <div className="card-body">
                                    <p className="card-text">Learn how to cook maki sushi by following our recipe.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Lets cook!</button>
                                        </div>
                                        <small className="text-body-secondary"></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home