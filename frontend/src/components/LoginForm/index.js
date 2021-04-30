import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

// import './LoginForm.css';

function LoginForm({ handleClick }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    // setCredential('demo')
    // setPassword('password')
    const credential = 'demo@user.io'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        // const data = await res.json();
        const data = await res.json();
        // console.log(data)
      })
  };

  return (
    <>
      <div className='form-modal'>
        <h1 className='h1'>Welcome Back</h1>
        <h2 className='h2'>Please log in.</h2>
        <form className='login-form' onSubmit={handleSubmit}>
          <ul className='login-form__errors'>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            {/* Username or Email */}
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
              placeholder='Username or Email'
            />
          </label>
          <label>
            {/* Password */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder='Password'
            />
          </label>
          <button className='submit-btn' type="submit">Log In</button>
          <button type='submit' className='demo-btn' onClick={demoSubmit}>Demo User</button>
        </form>
        <div className='other-div'>
          <button type='button' className='other-btn' onClick={handleClick}>Don't have an account?</button>
        </div>
        {/* <a href="#" class="modal__close">&times;</a> */}
      </div>
    </>

  );
}

export default LoginForm;