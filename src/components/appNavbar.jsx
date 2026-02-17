import { Search, Bell } from "lucide-react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext.jsx'


export default function Navbar() {
    const navigate = useNavigate();
    const { auth, logout } = useAuth()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg fixed-top py-3">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <div>
                        <img src="../public/photos/logo-new.png" width="100" height="100" alt="logo" />
                    </div></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse d-flex navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About us</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact us</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cuisines</a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">Indian</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Chinese</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">see all..</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    { }
                    {auth && auth.token ? (
                        <div className="d-flex align-items-center">
                            <div>
                                <button className="btn btn-outline-light" onClick={() => navigate("/addrecipe")}>Add you own recipe !</button>
                            </div>
                            <span className="text-light me-3"> Welcome! {(auth.user && (auth.user.username || auth.user.email)) || 'User'}</span>
                            <button type="button" className="btn btn-outline-light" onClick={() => { logout(); navigate('/'); }}>Logout</button>

                        </div>



                    ) : (
                        <div>
                            <span className="text-light me-3">Please login to add your Recipes! </span>
                            <button type="button" className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
                        </div>
                    )}

                </div>
            </div>
        </nav>

    );
}
