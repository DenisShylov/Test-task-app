import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addUserName } from '../../Redux/actionCreators';

const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  // const dispatch = useDispatch();
  const handleLogin = () => {
    // dispatch(addUserName(user?.nickname));
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
