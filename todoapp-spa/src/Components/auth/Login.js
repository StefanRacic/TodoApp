import React, { useContext, useState, useEffect } from 'react';
import '../auth/login.css';
import AuthContext from '../context/auth/authContext';
import alertify from 'alertifyjs';

const Login = props => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/table');
    }
    if (error !== null) console.log(error);
    clearErrors();
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || password === '') {
      alertify.error('Please input all fields');
    } else {
      login({
        username,
        password
      });
      alertify.success(`Welcome ${username}`);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Log In</h5>
              <form className="form-signin" onSubmit={onSubmit}>
                <div className="form-label-group">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                    className="form-control"
                    autoFocus
                    placeholder="Username"
                  />
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="custom-control custom-checkbox mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember password
                  </label>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Log in
                </button>
                <hr className="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
