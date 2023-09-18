import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const handleLogin = () => {
    loginWithRedirect({
      appState: {
        returnTo: '/repos',
      },
    });
  };

  return (
    !isAuthenticated && (
      <>
        {isLoading ? (
          <Button
            variant="outlined"
            color="inherit"
            disabled
            onClick={handleLogin}
          >
            LogIn
          </Button>
        ) : (
          <Button variant="outlined" color="inherit" onClick={handleLogin}>
            LogIn
          </Button>
        )}
      </>
    )
  );
};

export default Login;
