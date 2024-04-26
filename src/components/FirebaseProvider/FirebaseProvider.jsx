import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';



export const AuthContext = createContext(null);

// provider
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // login with email and password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // gitHub login
    const gitHubLogin = () => {
        return signInWithPopup(auth, gitHubProvider)
    }


    // log out
    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth);
    }


    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
     
                // setLoading(false)
                setUser(user)
                setLoading(false)
    
        });
        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        logOut,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;

FirebaseProvider.propTypes = {
    children: PropTypes.node
}