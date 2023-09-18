import { useAuth0 } from '@auth0/auth0-react';
import { Box,  Typography } from '@mui/material';
import React from 'react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Box>
        {user?.picture && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              style={{ borderRadius: '50%', height: '200px' }}
              src={user?.picture}
              alt={user?.name}
            />
            <Typography
              variant="span"
              sx={{ fontSize: 24 }}
            >{`${user?.name}(${user?.nickname})`}</Typography>
          </Box>
        )}
      </Box>
    )
  );
};

export default Profile;
