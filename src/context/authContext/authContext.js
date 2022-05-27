
import React,{createContext,useReducer} from 'react'
import authReducer from './authReducer'
const initContext = {
    isLoggedIn: false,
    user: null,
    logIn: () => {},
    setUser: (user) => {},
    logout: () => {},
}

export const AuthContext = createContext(initContext)
export const AuthProvider = ({children}) => {
    const [authState,despatch] = useReducer(authReducer, initContext);
    const logIn = () => {
        despatch({type: 'singIn'})
    }
    const setUser = (user) => {
        despatch({type: 'setUser',payload: user})
    }
    const logOut = () => {
        despatch({type: 'logOut'})
    }
    return (
        <AuthContext.Provider
            value={{
                authState,
                logIn,
                setUser,
                logOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
 