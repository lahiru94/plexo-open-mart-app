

export default function Upload(props) {
    return (
        <div className="container" style={{paddingTop:50}}>
            <div className="row">
                <div className="col-12">
                    <div className="card border-light px-4 py-5 text-center">
                        <div className="card-header bg-white pb-0">
                            <h2 className="h1 mb-3">Upload your model.</h2>
                        </div>
                        <div className="card-body pt-2 px-0 px-lg-7">
                            <p className="mb-5 lead">
                                Submit the link to your model. We will take care of the rest.
                            </p>
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="form-group">
                                        <div className="d-flex flex-row justify-content-center">
                                            <div className="input-group">
                                                <input className="form-control form-control-xl border-light" placeholder="Paste your link here" type="email" />
                                                <div className="input-group-prepend">
                                                    <button type="submit" className="btn btn-primary rounded-right">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}