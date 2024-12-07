import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {

    const { user } = useContext(AuthContext)
    if (!user) {
        return <Navigate to='/login'></Navigate>

    }
    return children
}

export default PrivateRoute
