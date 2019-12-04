import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) {
      authContext.loadUser();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="text-center pt-5">
      <h1>Welcome to Home Page</h1>
      <h5>This is your Todo App</h5>
      <h3>Please Log In to Access your Todo App</h3>
    </div>
  );
};

export default Home;
