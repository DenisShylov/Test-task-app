import { useAuth0 } from '@auth0/auth0-react';
import { Box, CircularProgress } from '@mui/material';
import LoginPage from './Components/Auth/LoginPage';

function App() {
  const { isLoading, isAuthenticated, error } = useAuth0();
  return (
    <Box sx={{ margin: 'auto' }}>
      {error && <p>Auth error</p>}
      {!error && isLoading && <CircularProgress sx={{ margin: 'auto' }} />}
      {!isAuthenticated && !isLoading && <LoginPage />}
    </Box>
  );
}

export default App;
