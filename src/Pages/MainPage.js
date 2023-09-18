import React, { useEffect } from 'react';
import ReposTable from '../Components/ReposTable/ReposTable';
import Profile from '../Components/Profile/Profile';
import SearchTextField from '../Components/SearchTextField/SearchTextField';
import { useAuth0 } from '@auth0/auth0-react';
import {
  counterIncrement,
  fetchingRepos,
  reposLength,
} from '../Redux/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import { counterPageSelector } from '../Redux/selectors';

const MainPage = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const pageCounter = useSelector(counterPageSelector);
  // init first request
  useEffect(() => {
    dispatch(reposLength(user?.nickname));
    if (user && pageCounter === 1) {
      dispatch(fetchingRepos(user?.nickname, 5, pageCounter));
    }
  }, [user]);

  return (
    <Box sx={{ margin: 'auto' }}>
      <Grid xl={1}>
        <Typography variant="h1">GitHub User Info</Typography>
        <Profile />
        <SearchTextField />
        <ReposTable />
      </Grid>
    </Box>
  );
};

export default MainPage;
