// Allows you to create reducer in an easy way by allowing you to be intuitive in splitting your logic
// Allows you to access it throughout your application and change stuff
// * personal note * I think this is like atom in recoil
import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = ""

export const themeSlice = createSlice({
    // Naming convention is the name of the state or something
    // You can do all the logic behind redux inside this, which is why reduxtoolkit is nice
    name: "theme",
    initialState: {value: initialStateValue },
        // Reducers are the functions that manipulate the state
    reducers: {
        // state holds current and previous value of state (hover to see)
        // action would be an object contains payload and type
        // payload is information you wanna use when changing your state, contains payload and type
        // You take the previous state and change it into whatever is in the payload
        changeTheme: (state, action) => {
            state.value = action.payload;
        },
    }
});

// Every time you create a new action, add it to your export const object
// reduxToolkit allows you to access actions via this function
export const { changeTheme } = themeSlice.actions

// export default is the default value that gets imported when somebody just imports the file
export default themeSlice.reducer;