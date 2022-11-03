import React, { useState } from 'react'
// used to modify the value of our states
import { useDispatch } from 'react-redux'
import { changeTheme } from '../features/theme'

const ChangeColor = () => {
    const [color, setColor] = useState('')
    
    const dispatch = useDispatch()

  return (
    <div>
        <input type="text" onChange={(event) => {
            setColor(event.target.value)
        }}/>
        <button onClick={() => {
            dispatch(changeTheme(color))
        }}>Change Color</button>
    </div>
  )
}

export default ChangeColor