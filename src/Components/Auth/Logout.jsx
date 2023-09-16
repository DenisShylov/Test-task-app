import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import React from 'react';

const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();
  const handleLogout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } });
  return (
    isAuthenticated && (
      <Button variant="outlined" color="inherit" onClick={handleLogout}>
        LogOut
      </Button>
    )
  );
};

export default Logout;
