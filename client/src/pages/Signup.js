import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Button } from 'semantic-ui-react'

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1 justify-content-center">
      <Link to="/login">← Go to Login</Link>

      <h2 className = "header-title">Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group row my-2">
          <label className="col-sm-4 col-form-label-lg" htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
            className="col-sm-8 form-control-lg"
          />
        </div>
        <div className="form-group row my-2">
          <label className="col-sm-4 col-form-label-lg" htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
            className="col-sm-8 form-control-lg"
          />
        </div>
        <div className="form-group row my-2">
          <label className="col-sm-4 col-form-label-lg" htmlFor="email">Email:</label>
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
        <div className="flex-row flex-end">
          <Button color="blue" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
