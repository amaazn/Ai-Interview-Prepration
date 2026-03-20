import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from 'react'

const Protected = ({children}) => {
    const { loading,user } = useAuth()


    if(loading){
        return (<main><h1>Loading...</h1></main>)
    }

    if(!user){ // agar user nahi hai to login page pe navigate kar denge
        return <Navigate to={'/login'} />
    }
    
    return children
}

export default Protected