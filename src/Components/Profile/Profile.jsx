import { useAuth0 } from '@auth0/auth0-react';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Container>
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
            <Typography variant="h3">{`${user?.name}(${user?.nickname})`}</Typography>
          </Box>
        )}
      </Container>
    )
  );
};

export default Profile;
