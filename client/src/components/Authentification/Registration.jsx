import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { userRegistration } from '../../redux/action/userActionCreator';
import { useNavigate } from 'react-router-dom';

function Registration() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registrationHandler = (event) => {
    event.preventDefault();
    dispatch(userRegistration({email, name, password, repeatPassword}))
    navigate('/login')
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            name="repeatPassword"
            value={repeatPassword}
            onChange={(event) => setRepeatPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Registration</button>
      </form>

    </div>
  );
}

export default Registration;