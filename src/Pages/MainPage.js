import React, { useEffect } from 'react';
import ReposTable from '../Components/ReposTable/ReposTable';
import Profile from '../Components/Profile/Profile';
import SearchTextField from '../Components/SearchTextField/SearchTextField';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchingRepos, reposLength } from '../Redux/actionCreators';
import { useDispatch } from 'react-redux';

const MainPage = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();

  useEffect(() => {
    dispatch(reposLength(user.nickname));
    if (user) {
      dispatch(fetchingRepos(user.nickname, 5, 1));
    }
  }, []);
  return (
    <>
      <Profile />
      <SearchTextField />
      <ReposTable />
    </>
  );
};

export default MainPage;
