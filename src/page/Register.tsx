import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { AuthForm } from '../component/AuthForm';

export const Register = () => {
    const {handleRegister} = useAuth();
  return (
    <div className="container">
        <h1>Register</h1>
        <AuthForm onSubmit={handleRegister}/>
    </div>
  )
}
