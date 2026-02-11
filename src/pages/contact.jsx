import { useState } from "react"

function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        issues: ""

    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/contact/", {
            method: 'POST',
            header: {
                "Content-Type": "application/json",
            },  
            body: JSON.stringify(form)
        })
            .then((res) => res.json())
            .then(data => {
                alert(data.message);
                setForm({ name: "", email: "", issue: "" });
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <h1 className="text-center py-3">Contact us</h1>

            <form  onSubmit={handleSubmit}>

                <div className="outer d-flex d-md-block align-items-center justify-content-center shadow bg-light w-75 mx-auto rounded-4">
                    <div className="mb-3 col-5 text-center mx-auto">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input name="name" value={form.name} onChange={handleChange} className="form-control col-12" placeholder="Enter your name..." />
                    </div>
                    <div className="mb-3 col-5 text-center mx-auto">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} className="form-control col-12" id="email" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3 col-5 text-center mx-auto">
                        <label htmlFor="desc" className="form-label">Describe the issue</label>
                        <textarea className="form-control" name="desc" id="desc" onChange={handleChange} value={form.desc} rows="3"></textarea>
                    </div>
                    <div className="text-center">
                        <button  className="btn btn-primary mb-4">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Contact