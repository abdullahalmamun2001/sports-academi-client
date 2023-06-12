import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

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

            if(currentUser){
                axios.post('  https://academy-sports-abdullahalmamun2001.vercel.app/jwt',{email:currentUser?.email})
                .then(data=>{
                    
                    console.log(data);
                    localStorage.setItem('access-token',data.data)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
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