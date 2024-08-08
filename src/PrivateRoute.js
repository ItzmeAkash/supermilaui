import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const username = document.cookie.split('; ').find(row => row.startsWith('name='));
  const email = document.cookie.split('; ').find(row => row.startsWith('email='));

  if (!username || !email) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
