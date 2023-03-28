import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../config/firebase";

export const UserContext = createContext( );

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        console.log('use efect en accion');
        const unsuscribe =  onAuthStateChanged(auth, (user) => {
            console.log(user)
            setUser(user)
        });
        return unsuscribe
    }, [])

    if(user === false) return <p className="text-success">Loading app...</p>

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext);