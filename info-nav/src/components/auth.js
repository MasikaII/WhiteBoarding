import axios from 'axios';
import { Redirect } from 'react-router-dom';
const login = async (username, password) => {
  try {
    const response = await axios.post('/api/login', {
      username,
      password,
    });
    localStorage.setItem('token', response.data.token);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const logout = () => {
  localStorage.removeItem('token');
};

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const protectRoute = (Component) => {
  return (props) => {
    if (!isAuthenticated()) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };
};

// export { login, logout, isAuthenticated, protectRoute };
export { isAuthenticated, login, logout, protectRoute as default };
