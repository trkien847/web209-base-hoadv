import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { AuthForm } from '../component/AuthForm';

export const Login = () => {
    const {handleLogin} = useAuth();
  return (
    <div className="container">
        <h1>Login</h1>
        <AuthForm onSubmit={handleLogin}/>
    </div>
  )
}
