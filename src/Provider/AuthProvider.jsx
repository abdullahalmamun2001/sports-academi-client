import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

// import axios from "axios";
// const axios = require('axios');

export const AuthContext = createContext(null);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleRegister = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            // if(currentUser){
            //     axios.post('http://localhost:5000/jwt',{email:currentUser.email})
            //     .then(data=>{
            //         const token=data.data.token;
            //         localStorage.setItem('access-token',token)
            //     })
            // }
            // else{
            //     localStorage.removeItem('access-token')
            // }
            setLoading(false)
            return unsubscribe;
        })
    }, [])

    const authInfo = { user, loading, signIn, googleRegister, createUser, updateUserProfile, logOut }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;