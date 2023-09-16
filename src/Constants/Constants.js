import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

const Constants = () => {
  const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0();
  return {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect,
  };
};

export default Constants;
