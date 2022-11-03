import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Allows you to import your 'store' where you store the states
import { configureStore } from '@reduxjs/toolkit'
// What we use to determine which components have access to this store
// Wrapped around our app
import { Provider } from 'react-redux'
// represents the reducer from the user feature
// its key is the name, its value is the current state
import userReducer from './features/user'
import themeReducer from './features/theme'

// This becomes the storage for all our states, allows us to access them with useSelector()
const store = configureStore({
  // contains a collection of "reducers"
  // A reducer is a function that takes in some information about the current states, i.e. takes in value of previous state
  // and takes in an action you want to perform on the state, then returns new value of state
  // We're gonna have reducers for all the states we're gonna have in our application
  // It's how we're gonna manage and change them
  reducer: {
    user: userReducer,
    theme: themeReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
