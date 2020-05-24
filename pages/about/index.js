import Link from 'next/link'
import AboutStyles from './AboutPage.module.css'

function About() {
    return (
        <div className='conatainer'>
            <section className="section">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-md-6 col-xl-6 my-5 mt-sm-0 d-none d-sm-block"><img className="rounded img-fluid effect-img-1" src="/img/sections/about-us-3.jpg" alt="Working peoples" />
                            <img className="rounded img-fluid effect-img-2" src="/img/sections/about-plexo.jpg" alt="Themesberg Office " /></div>
                        <div className="col-md-6 col-xl-5 text-center text-md-left">
                            <h2 className="h1 mb-5 font-weight-light">top-drawer<br /><span className="font-weight-bold">ML models.</span></h2>
                            <p className="lead"> 
                                Plexo Mart is a collection of carefully curated, high-quality ML models.  
                                Each model comes with a clear explanation of what it does, how it does that and how well it has performed.
                            </p>
                            <p className="lead"> 
                                You can even 
                                <mark>
                                    <Link href="/upload">
                                    <span className={AboutStyles.clickableText}>submit</span>
                                    </Link>
                                </mark> 
                                your own models which will be reviewed and added to the collection by our moderators. 
                                If you have suggestions, feedback, questions or even complaints don't hesitate to 
                                <mark>
                                    <Link href="/about/contact">
                                    <span className={AboutStyles.clickableText}>contact us</span>
                                    </Link>
                                </mark>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About