

function Contact(){
    return(
        <>
        <h1 className="text-center py-3">Contact us</h1>

        <form method="post" action="/contact">

            <div className="outer d-flex d-md-block align-items-center justify-content-center shadow bg-light w-75 mx-auto rounded-4">
                <div className="mb-3 col-5 text-center mx-auto">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input name="name" className="form-control col-12" placeholder="Enter your name..." />
                </div>
                <div className="mb-3 col-5 text-center mx-auto">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control col-12" id="email" placeholder="name@example.com" />
                </div>
                <div className="mb-3 col-5 text-center mx-auto">
                    <label htmlFor="desc" className="form-label">Describe the issue</label>
                    <textarea className="form-control" name="desc" id="desc" rows="3"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary mb-4">Submit</button>
                </div>
            </div>
        </form>
        </>
    )
}

export default Contact