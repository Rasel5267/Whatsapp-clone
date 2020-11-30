import React, { useState } from 'react';
import './LogIn.css';
import logo from './icon.jpg';
import {Link} from "react-router-dom";
import firebase from 'firebase/app'
import "firebase/analytics";
import "firebase/auth";
import { UserContext } from '../../App';
import { useContext } from 'react';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const LogIn = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })

    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    // const history = useHistory();
    // const location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            } 
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            // storeAuthToken();
        }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(true)
    //     .then(function(idToken) {
    //         sessionStorage.setItem('token', idToken);
    //         history.replace(from);
    //     }).catch(function(error) {
    //         //Handle error
    //     });
    // }

    return (
        <div className = 'logIn'>
            <img src={logo} alt="logo" className="logo"/>
            <div className="logInForm">
                <div className="logInMethod">
                    <h3>Login With</h3>
                    <Link to="/register">
                        <button onClick={handleGoogleSignIn} className ='logInBtn'> <i class="fab fa-google"></i> <span>Continue with Google</span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LogIn;