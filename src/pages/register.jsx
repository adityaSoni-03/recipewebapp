import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'
import { ToastContainer, toast,Bounce } from 'react-toastify';
const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { login } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://127.0.0.1:8000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            const data = await res.json();

            if (res.ok) {
                // set auth and navigate to login (or home)
                
                toast.success("Registration successfull! please login now")
                
            } else {
                toast.error(data.error || "Registration failed");
            }
        } catch (err) {
            console.error("Register error:", err);
        }
    }
    return (
        <section className="vh-100" style={{ backgroundColor: '#eee' }}>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            ></ToastContainer>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form onSubmit={handleSubmit} className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="form3Example1c" className="form-control" />
                                                    <label className="form-label" for="form3Example1c">Enter username</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3c" className="form-control" />
                                                    <label className="form-label" for="form3Example3c">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4c" className="form-control" />
                                                    <label className="form-label" for="form3Example4c">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" />
                                                    <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div>



                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="/photos/sign-up.png"
                                            class="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage
