import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import logo from '../../../images/logo.png'
import image from '../../../images/googleIcon.png'
import { Link } from 'react-router-dom';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {


    var provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div class="container text-center">
                <div class="head-logo my-5">
                    <Link to="/"><img style={{ height: '75px' }} src={logo} alt="" /></Link>
                </div>

                <div class="row">
                    <div class="col-md-3">

                    </div>

                    <div class="col-md-6 mt-5 p-5 shadow">
                        <div class="login-form">
                            <h3 class="mb-3">Login With</h3>
                            <div class="google-login mt-5">
                                <button onClick={handleGoogleSignIn}><img style={{ height: '30px' }} src={image} alt="" />Continue with Google</button>
                            </div>
                            <p className="mt-3">Don't have an account? <Link to="/">Create an Account</Link></p>
                        </div>
                    </div>

                    <div class="col-md-3">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;