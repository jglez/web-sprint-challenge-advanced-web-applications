import React, { useEffect, useState, useHistory } from "react";
import axios from "axios";

const log = console.log

const initialFormValues = {
  username: '',
  password: ''
}

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues)

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(() => {
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });


  {/* 
    CHECKLIST:
    - form state ✅
    - JSX to render form elements ✅
    - onChange handler to update form state ✅
    - prevent default behavior ✅
    - onSubmit handler for form ✅
  */}

  const updateForm = evt => {
    const { name, value } = evt.target

    setFormValues({ ...formValues, [name]: value })
  }

  const submitForm = evt => {
    evt.preventDefault()

    const userLogin = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }

    // Validation for empty field submission
    if (!userLogin.username || !userLogin.password) return log('fields are empty')

    axios
      .post('http://localhost:5000/api/login', userLogin) // send user login data to server

      .then(res => {
        // receive token and save to localStorage as token
        localStorage.setItem('token', res.data.payload)

        // Redirect user
        props.history.push('/bubbles')
      })
      .catch(err => {
        log(err.response.data.error)
      })

  }

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <p>Build a login page here</p>
      </h1>

      <form onSubmit={submitForm}>
        <label>Username
          <input
            name='username'
            type='text'
            onChange={updateForm}
            value={formValues.username}
          />
        </label>

        <label>Password
          <input
            name='password'
            type='password'
            onChange={updateForm}
            value={formValues.password}
          />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field. ✅
//2. Add whatever state necessary for form functioning. ✅
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password", RESPECTIVELY. ✅
//4. If either the username or password is not displayed EXACTLY the following words: Username or Password, it's not valid. ✅
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage. ✅