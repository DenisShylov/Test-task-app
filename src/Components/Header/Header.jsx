import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const handleSettings = () => {
    navigate('../settings');
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Test Task App
          </Typography>
          <Box sx={{ mr: 2 }}>
            {!isAuthenticated ? (
              <Button variant="contained" color="secondary" disabled>
                Settings
              </Button>
            ) : (
              <Button
                onClick={handleSettings}
                variant="contained"
                color="secondary"
              >
                Settings
              </Button>
            )}
          </Box>
          <Box sx={{}}>
            <Login />
            <Logout />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
