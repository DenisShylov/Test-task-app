import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { repositoriesSelector } from '../Redux/selectors';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';

const ReposNamePage = () => {
  const location = useLocation().pathname;
  const locationIdRepos = location.slice(7);
  const navigate = useNavigate();

  const repositoryInfo = useSelector(repositoriesSelector).filter(
    (rep) => rep.id.toString() === locationIdRepos
  );

  const handleBackHome = () => {
    navigate('../repos');
  };

  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          m: 'auto',
        }}
      >
        <Typography variant="h3" component="h2">
          Repositories info
        </Typography>
        <List
          sx={{
            border: '1px solid',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            mt: 2,
          }}
          component="nav"
          aria-label="mailbox folders"
        >
          <ListItem sx={{ minWidth: 250, textAlign: 'center' }}>
            <ListItemText
              primary={`Full Name: ${repositoryInfo[0]?.full_name}`}
            />
          </ListItem>
          <Divider />
          <ListItem divider sx={{ border: 'none' }}>
            <ListItemText
              primary={`Language: 
            ${repositoryInfo[0]?.language}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={`Default branch: ${repositoryInfo[0]?.default_branch}`}
            />
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemText
              primary={`Owner: ${repositoryInfo[0]?.owner?.login}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText>
              URL:{' '}
              <Link to={`${repositoryInfo[0]?.html_url}`}>
                {repositoryInfo[0]?.name}
              </Link>
            </ListItemText>
          </ListItem>
        </List>
        <Button
          onClick={handleBackHome}
          sx={{ mt: 3, minWidth: 200, height: 50, fontSize: 24 }}
          variant="outlined"
        >
          <ReplyAllIcon sx={{ mr: 1 }} /> Go Home
        </Button>
      </Box>
    </Container>
  );
};

export default ReposNamePage;
