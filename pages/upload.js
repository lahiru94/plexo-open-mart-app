import {useState, useContext} from 'react'
import {GoogleLogin} from 'react-google-login';
import authContext from '../contexts/auth-context'

export default function Upload(props) {

    const {authData, setAuthData} = useContext(authContext)
    const [authError, setAuthError] = useState(null)

    const signUserIn = async (response) => {
        //send this response data to backend to complete authentication
        setAuthData({
            user:{},
            signedIn:true
        })
    }

    const showSignInError = (error) => {
        setAuthError('error occured')
    }

    return (
        <div className="container" style={{paddingTop:50}}>
            <div className="row">
                <div className="col-12">
                    <div className="card border-light px-4 py-5 text-center">
                        <div className="card-header bg-white pb-0">
                            <h2 className="h1 mb-3">
                                {authData.signedIn? "Upload" : "Sign in to upload" } your model.
                            </h2>
                        </div>
                        <div className="card-body pt-2 px-0 px-lg-7">
                            {authData.signedIn &&
                            <p className="mb-5 lead">
                                Submit the link to your model. We will take care of the rest.
                            </p>}
                            <div className="row justify-content-center">
                                
                                {!authData.signedIn &&
                                <GoogleLogin
                                    clientId="369410552477-3eu17aqqk77rb3nv0389q3t62iqvkjjr.apps.googleusercontent.com"
                                    buttonText="Sign in with Google"
                                    onSuccess={signUserIn}
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
        </div>
    )
}