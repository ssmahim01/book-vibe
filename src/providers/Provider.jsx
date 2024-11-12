import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider;

    const createUserWithEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signInWithEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUserWithEmailPass,
        signInWithGoogle,
        signInWithEmailPass,
        signOutUser
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Provider;