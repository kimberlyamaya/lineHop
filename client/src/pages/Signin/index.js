import React, { useState } from 'react';
import Header from '../../components/header';
// import Footer from '../footer'; 

import { useMutation } from '@apollo/client';
import { LOGIN_CUST_USER } from '../../utils/mutations';
import Auth from '../../utils/auth'; 

const CustLogin = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [custLogin, { error }] = useMutation(LOGIN_CUST_USER);
  console.log(error)

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await custLogin({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div>
        <br></br>
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <input onChange={handleChange} className="form-control" type="username" placeholder="Username" name="username" required></input>
            </div>
            <div className="mb-3">
              <input onChange={handleChange} className="form-control" type="password" placeholder="Password" name="password" required></input>
            </div>
            <div className="mb-3">
              {/* I need to get this button centered to match home page */}
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
            <div className="mb-3">
              <p>New to lineHop?  <a href="/signup">Sign up</a></p>
            </div>
          </form>
          {error && <div>Signin failed</div>}
        </div>
    </div>
  )
}

export default CustLogin;