import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';

const Register = props => {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/table');
    }
    if (error !== null) {
      console.log(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { username, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || password === '') {
      console.log('Please enter all fields');
    } else {
      register({
        username,
        password
      });
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Register</h5>
              <form className="form-signin" onSubmit={onSubmit}>
                <div className="form-label-group">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                    className="form-control"
                    required
                    autoFocus
                  />
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className="form-control"
                    required
                  />
                </div>

                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  value="Register"
                >
                  Register
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

export default Register;
