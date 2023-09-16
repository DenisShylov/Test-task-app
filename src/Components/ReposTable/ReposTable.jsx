import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchingRepos } from '../../Redux/actionCreators';
import { useAuth0 } from '@auth0/auth0-react';
import {
  counterPageSelector,
  dataLengthSelector,
  filterRepositoriesSelector,
  repositoriesSelector,
} from '../../Redux/selectors';
import moment from 'moment/moment';

const ReposTable = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const counterPage = useSelector(counterPageSelector);
  const reposData = useSelector(repositoriesSelector);
  const dataLength = useSelector(dataLengthSelector);
  const filterData = useSelector(filterRepositoriesSelector);
  const condition = filterData.length > 0 ? filterData : reposData;

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && reposData.length < dataLength) {
      dispatch(fetchingRepos(user.nickname, 5, counterPage));
    } else return;
  }, [inView]);

  return (
    <TableContainer sx={{ height: '135px', mt: 3 }} component={Paper}>
      <Table
        sx={{ minWidth: 650, maxHeight: '200px' }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Repositories name</TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Languages
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Pushed_at
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Updated_at
            </TableCell>
            <TableCell sx={{ fontWeight: 700 }} align="right">
              Fork
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {condition.map((row) => (
            <TableRow
              onClick={(e) => console.log(e.target)}
              key={row?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell ref={ref} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row?.language}</TableCell>
              <TableCell align="right">
                {moment(row?.pushed_at).format('DD/MM/YYYY')}
              </TableCell>
              <TableCell align="right">
                {moment(row?.updated_at).format('DD/MM/YYYY')}
              </TableCell>
              <TableCell align="right">{row?.forks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReposTable;
