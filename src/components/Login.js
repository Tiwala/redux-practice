import React from 'react'
// used to modify values of our states
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
      {/* On clicking, changes the login actions into the filled values */}
        <button onClick={() => {
          dispatch(login({name: "Gerard", age: 28, email: "gerard.c.sanjuan@gmail.com"}))
        }}>Login
        </button>
        <button onClick={() => {
          dispatch(logout())
        }}>
          Logout
        </button>
    </div>
  )
}

export default Login