
import Head from 'next/head'

function About() {
    return (
        <>
            <Head>
                <title>About Next App</title>

                <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
                <link rel="manifest" href="/img/favicon/site.webmanifest"/>
                <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#ffffff"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="theme-color" content="#ffffff"/>
                <link type="text/css" href="/vendor/@fortawesome/fontawesome-free/css/all.min.css" rel="stylesheet"/>

                <script src="/vendor/jquery/dist/jquery.min.js"></script>
                <script src="/vendor/popper.js/dist/umd/popper.min.js"></script>
                <script src="/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
                <script src="/vendor/headroom.js/dist/headroom.min.js"></script>

                <script src="/vendor/onscreen/dist/on-screen.umd.min.js"></script>
                <script src="/vendor/nouislider/distribute/nouislider.min.js"></script>
                <script src="/vendor/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
                <script src="/vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"></script>
                <script src="/vendor/waypoints/lib/jquery.waypoints.min.js"></script>
                <script src="/vendor/jarallax/dist/jarallax.min.js"></script>
                <script src="/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
                <script src="/vendor/vivus/dist/vivus.min.js"></script>

                <script async defer src="https://buttons.github.io/buttons.js"></script>
                <script type="text/javascript" src='/js/pixel.js'></script>
            </Head>

            <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary mb-4">
                <div className="container position-relative">
                    <a className="navbar-brand mr-lg-3" href="#">
                        <img className="navbar-brand-dark" src="/img/brand/light.svg" alt="menuimage" />
                        <img className="navbar-brand-light" src="/img/brand/dark.svg" alt="menuimage" />
                    </a>
                    <div className="navbar-collapse collapse" id="navbar-default-primary">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="#">
                                        <img src="/img/brand/dark.svg" alt="menuimage" />
                                    </a>
                                </div>
                                <div className="col-6 collapse-close">
                                    <i className="fas fa-times" data-toggle="collapse" role="button"
                                        data-target="#navbar-default-primary" aria-controls="navbar-default-primary"
                                        aria-expanded="false" aria-label="Toggle navigation"></i>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                                    <i className="fas fa-angle-down nav-link-arrow"></i>
                                    <span className="nav-link-inner-text">Dropdown 2 </span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Dropdown item 1</a></li>
                                    <li><a className="dropdown-item" href="#">Dropdown item 2</a></li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center" aria-haspopup="true" aria-expanded="false">Dropdown item 3 <i className="fas fa-angle-right nav-link-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a href="#" className="dropdown-item">Submenu item 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="dropdown-item">Submenu item 2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Dropdown item 4</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="text-white mb-0">Primary navbar</p>
                        <button className="navbar-toggler ml-2" type="button" data-toggle="collapse"
                            data-target="#navbar-default-primary" aria-controls="navbar-default-primary"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </nav>

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal-notification">Notification</button>
            <div className="modal fade" id="modal-notification" tabIndex="-1" role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
                <div className="modal-dialog modal-info modal-dialog-centered" role="document">
                    <div className="modal-content bg-gradient-secondary">
                        <div className="modal-header">
                            <p className="modal-title" id="modal-title-notification">A new experience, personalized for you.</p>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="py-3 text-center">
                                <span className="modal-icon display-1-lg"><i className="far fa-envelope-open"></i></span>
                                <h4 className="modal-title my-3">Important message!</h4>
                                <p>Do you know that you can assign status and relation to a company right in the visit list?.</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-white">Go to Inbox</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About