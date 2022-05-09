import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../redux/action/userActionCreator';
import { selectUser } from '../../redux/slicer/userSlice';
import { useSelector } from 'react-redux';

function Header() {
  const isAuth = useSelector(selectUser).isAuth;
  const dispatch = useDispatch();
  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(userLogOut());
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {!isAuth && <a className="nav-link" href="/login">Login</a>}
              </li>
              <li className="nav-item">
                {!isAuth && <a className="nav-link" href="/registration">Registration</a>}
              </li>
              <li className="nav-item">
                {isAuth && <a className="nav-link" href="/" onClick={(event) => logoutHandler(event)}>Logout</a>}
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header;