import { useState, useContext } from 'react'
import { GoogleLogin } from 'react-google-login';
import authContext from '../contexts/auth-context'

export default function Upload(props) {

    const { authData, setAuthData } = useContext(authContext)
    const [authError, setAuthError] = useState(null)

    const signIn = async (response) => {
        //send this response data to backend to complete authentication
        setAuthData({
            user: {},
            signedIn: true
        })
    }

    const signOut = async () => {
        setAuthData({
            user: {},
            signedIn: false
        })
    }

    const showSignInError = (error) => {
        setAuthError('error occured')
    }

    return (
        <div className="container" style={{ paddingTop: 50 }}>
            <div className="row">
                <div className="col-12">
                    <div className="card border-light px-4 py-5 text-center">
                        <div className="card-header bg-white pb-0">
                            {authData.signedIn ?
                                <h2 className="h1 mb-3">
                                    Hi
                                    <mark>
                                        <u><span data-toggle="modal" data-target="#modal-default" style={{ cursor: 'pointer' }}>User</span></u>
                                    </mark>,
                                 Let's upload your model.
                            </h2> :
                                <h2>
                                    Sign in to submit your model
                            </h2>
                            }
                        </div>
                        <div className="card-body pt-2 px-0 px-lg-7">
                            {authData.signedIn &&
                                <p className="mb-5 lead">
                                    Submit the link to the model. We'll take care of the rest.
                            </p>}
                            <div className="row justify-content-center">

                                {!authData.signedIn &&
                                    <GoogleLogin
                                        clientId="369410552477-3eu17aqqk77rb3nv0389q3t62iqvkjjr.apps.googleusercontent.com"
                                        buttonText="Sign in with Google"
                                        onSuccess={signIn}
                                        onFailure={showSignInError}
                                        cookiePolicy={'single_host_origin'}
                                    />
                                }

                                {authData.signedIn &&
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
                                    </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h6 class="modal-title">You've logged in as User Name</h6> */}
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p> You are signed in as <b>User Name</b> from the gmail account: <b>user@gmail.com</b></p>
                        </div>
                        <div class="modal-footer">
                            <button 
                                type="button" 
                                class="btn btn-link text-danger ml-auto" 
                                data-dismiss="modal"
                                onClick={signOut}
                            >
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}