import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();

  // const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  // if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  // // Validation for Signup Errors
  // const validate = (data) => {
  //   const errors = {};
  //   if (!data.username) errors.username = 'Username required';
  //   if (!data.email) errors.email = 'Email required';
  //   if (!data.password) errors.password = 'Password required';
  //   else if (data.password.length < 8)
  //     errors.password = 'Must have at least 8 characters';
  //   else if (data.password !== data.confirmPassword)
  //     errors.confirmPassword = 'Passwords must match';

  //   return errors;
  // };

  // const Input = ({ input, type, placeholder, meta: { touched, error } }) => (
  //   <React.Fragment>
  //     <input {...input} type={type} placeholder={placeholder} />
  //     {touched && error}
  //   </React.Fragment>
  // );

  return (
    <form className='signup-form' onSubmit={handleSubmit}>
      <ul className='signup-form__errors'>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <label>
        {/* Email */}
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          // component={Input}
          placeholder='Email'
        />
        {/* {errors.username} */}
      </label>
      <label>
        {/* Username */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder='Username'
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
      <label>
        {/* Confirm Password */}
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder='Confirm Password'
        />
      </label>
      <button className='submit-btn' type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;