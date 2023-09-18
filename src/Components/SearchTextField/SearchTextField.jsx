import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fullReposListSelector } from '../../Redux/selectors';
import { filterRepos } from '../../Redux/actionCreators';

const SearchTextField = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const reposData = useSelector(fullReposListSelector);

  useEffect(() => {
    const filtered = reposData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    if (!value) {
      dispatch(filterRepos([]));
    } else dispatch(filterRepos(filtered));
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Grid sx={{ xl: 1 }}>
      <TextField
        fullWidth={true}
        value={value}
        onChange={handleChange}
        id="standard-basic"
        label="Enter the repository name"
        variant="standard"
      />
    </Grid>
  );
};

export default SearchTextField;
