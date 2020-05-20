function About() {
    return (
        <div className='conatainer'>
            <section className="section">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-md-6 col-xl-6 my-5 mt-sm-0 d-none d-sm-block"><img className="rounded img-fluid effect-img-1" src="/img/sections/about-us-3.jpg" alt="Working peoples" />
                            <img className="rounded img-fluid effect-img-2" src="/img/sections/about-us-2.jpg" alt="Themesberg Office " /></div>
                        <div className="col-md-6 col-xl-5 text-center text-md-left">
                            <h2 className="h1 mb-5 font-weight-light">Small team,<br /><span className="font-weight-bold">Big hearts.</span></h2>
                            <p className="lead">Themesberg is an experienced and passionate group of designers, developers, project managers, writers and artists. Every client we work with becomes a part of the team. Together we face the challenges and celebrate the victories.</p>
                            <p className="lead">With a culture of collaboration, a roster of talent, and several office pooches, the Themesberg team is active in the creative community, endlessly interested in what’s next, and generally pleasant to be around.</p>
                            <img src="/img/signature.svg" alt="signature" className="mt-4" width="150" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About