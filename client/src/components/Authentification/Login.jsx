import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userLogin } from '../../redux/action/userActionCreator';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const registrationHandler = (event) => {
    event.preventDefault();
    dispatch(userLogin({ email, password }))
  }

  return (
    
    <div className='authContainer'>
      <form onSubmit={(event) => registrationHandler(event)}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="name"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;