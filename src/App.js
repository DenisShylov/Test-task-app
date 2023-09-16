import { useAuth0 } from '@auth0/auth0-react';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import LoginPage from './Components/Auth/LoginPage';
import MainPage from './Pages/MainPage';

function App() {
  const { isLoading, isAuthenticated, error } = useAuth0();
  return (
    <Box sx={{ margin: 'auto' }}>
      {error && <p>Auth error</p>}
      {!error && isLoading && <CircularProgress sx={{ margin: 'auto' }} />}
      {!isAuthenticated && !isLoading && <LoginPage />}
      {!error && !isLoading && isAuthenticated && (
        <Grid xl={1}>
          <Typography variant="h1">GitHub User Info</Typography>
          <MainPage />
        </Grid>
      )}
    </Box>
  );
}

export default App;
