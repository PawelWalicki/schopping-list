import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

export function useAuth() {
    const [authState, setAuthState] = useState({
        isSignedIn: false,
        pending: true,
        user: null,
        db: null,
    })

    useEffect(() => {
        const unregisterAuthObserver =  auth.onAuthStateChanged(user =>
            setAuthState({user, pending: false, isSignedIn: !!user })
        )
        return () => unregisterAuthObserver()
    },[])

    return{ auth,db, ...authState}
}