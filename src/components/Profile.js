import React from 'react'
// Hook we use to grab values of our states everytime we use them
// used to access values of our states
import { useSelector } from "react-redux"

const Profile = () => {
  // takes in a function that takes in which state you wanna access
  // access the VALUE of the user state
  const user = useSelector((state) => state.user.value)
  return (
    <div>
        <h1>Profile Page</h1>
        <p> Name: {user.name} </p>
        <p> Age: {user.age} </p>
        <p> Email: {user.email} </p>
    </div>
  )
}

export default Profile