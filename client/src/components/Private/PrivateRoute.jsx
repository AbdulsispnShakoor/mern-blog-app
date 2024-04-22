import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const {currentUser} = useSelector((state)=> state.auth)
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
