
import ModelCard from '../components/ModelCard'

export default function Home() {

    const featuredModels = new Array(6)
    featuredModels.fill()

    return (
        <div className="container">
            <section style={{ marginTop: 60, display:'flex', justifyContent:'center' }}>
                <div className="col-12 col-sm-12 col-md-10">
                <div className="form-group">
                    <div className="input-group mb-4">
                        <input className="form-control" placeholder="Search for model" type="text" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section style={{ marginTop: 50 }}>
                <h5 style={{ width:'100%', display:'flex', justifyContent:'center' }} >
                    Featured Models
                </h5>
                <div className="d-flex flex-wrap justify-content-center" style={{ marginTop: 30 }}>
                    {featuredModels.map((model, index) => (<ModelCard key={index} index={index + 1} />))}
                </div>
            </section>
        </div>
    )
}
