import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { Button } from 'semantic-ui-react'

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 show justify-content-center">
      <Link to="/signup">← Go to Signup</Link>

      <h2 className = "header-title">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group row my-2">
          <label className="col-sm-4 col-form-label-lg" htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
            className="col-sm-8 form-control-lg"
          />
        </div>
        <div className="form-group row my-2">
          <label className="col-sm-4 col-form-label-lg" htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
            className="col-sm-8 form-control-lg"
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <Button color="blue" type="submit">Submit</Button>
        </div>
        <div className='forgot-password flex-row flex-end my-2'>
            <a href="/signup">forgot password</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
