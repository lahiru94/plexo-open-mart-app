import {useContext} from 'react'
import Link from 'next/link'
import authContext from '../contexts/auth-context'


export default function Navbar() {

    const {authData, setAuthData} = useContext(authContext)

    const signOut = () => {
        setAuthData(
            {
                signedIn:false,
                user:{}
            }
        )
    }

    const signIn = () => {
        window.location = '/upload'
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary mb-4">
            <div className="container position-relative">
                <Link href="/">
                    <a className="navbar-brand mr-lg-3">
                        <img className="navbar-brand-dark" src="/img/brand/light.svg" alt="menuimage" />
                        <img className="navbar-brand-light" src="/img/brand/dark.svg" alt="menuimage" />
                    </a>
                </Link>
                <div className="navbar-collapse collapse" id="navbar-default-primary">
                    <div className="navbar-collapse-header">
                        <div className="row">
                            <div className="col-6 collapse-brand">
                                <Link href="/">
                                    <a>
                                        <img src="/img/brand/dark.svg" alt="menuimage" />
                                    </a>
                                </Link>
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
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/upload">
                                <a className="nav-link">Upload</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">About</a>
                            </Link>
                        </li>
                        {/* <li className="nav-item dropdown">
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
                        </li> */}
                    </ul>
                </div>
                {/* <div className="d-flex align-items-center">
                    <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                                <i className="fas fa-angle-down nav-link-arrow"></i>
                                <span className="nav-link-inner-text"> <i className="far fa-user-circle"></i> </span>
                            </a>
                            <ul hidden={!authData.signedIn} className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Profile</a></li>
                                <li><a className="dropdown-item" href="#">My Uploads</a></li>
                                <li><a className="dropdown-item" href="#">Bookmarks</a></li>
                                <li className="dropdown-submenu">
                                    <a href="#" className="dropdown-toggle dropdown-item d-flex justify-content-between align-items-center" aria-haspopup="true" aria-expanded="false">
                                        User action 3 
                                        <i className="fas fa-angle-right nav-link-arrow"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#" className="dropdown-item">secondary action 1</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">secondary action 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li onClick={signOut}><a className="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                            <ul hidden={authData.signedIn} className="dropdown-menu">
                                <li onClick={signIn}><a className="dropdown-item" href="#">Sign in</a></li>
                            </ul>
                        </li>
                    </ul>
                </div> */}
                <div className="d-flex align-items-center">
                    <p className="text-white mb-0">Plexo - Open Mart</p>
                    <button className="navbar-toggler ml-2" type="button" data-toggle="collapse"
                        data-target="#navbar-default-primary" aria-controls="navbar-default-primary"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    )
}