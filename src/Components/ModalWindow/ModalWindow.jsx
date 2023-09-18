import { Box, Typography, Modal } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { repositoriesSelector } from '../../Redux/selectors';

const ModalWindow = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const locationIdRepos = location.slice(7);
  const { user } = useAuth0();
  const locationSettings = location === '/settings';

  const repositoryInfo = useSelector(repositoriesSelector).filter(
    (rep) => rep.id.toString() === locationIdRepos
  );

  const handleClose = () => {
    setOpen(false);
    navigate('/repos');
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {locationSettings ? 'User info for GitHub' : 'Repositories info'}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {locationSettings
              ? `Nick Name: ${user?.nickname}`
              : `Full Name: ${repositoryInfo[0]?.full_name}`}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {locationSettings
              ? `Name: ${user?.name}`
              : `Language: 
            ${repositoryInfo[0]?.language}`}
          </Typography>
          {!locationSettings ? (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {`Default branch: ${repositoryInfo[0]?.default_branch}`}
            </Typography>
          ) : (
            ''
          )}
          {!locationSettings ? (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {`Owner: ${repositoryInfo[0]?.owner?.login}`}
            </Typography>
          ) : (
            ''
          )}
          {!locationSettings ? (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              URL:{' '}
              <Link to={`${repositoryInfo[0]?.html_url}`}>
                {repositoryInfo[0]?.name}
              </Link>
            </Typography>
          ) : (
            ''
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;
