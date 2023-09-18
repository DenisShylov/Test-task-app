import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };
  return (
    <Button
      variant="outlined"
      sx={{ borderWidth: '3px', minWidth: '200px' }}
      onClick={handleLogin}
    >
      Log In Github
    </Button>
  );
};

export default LoginPage;
