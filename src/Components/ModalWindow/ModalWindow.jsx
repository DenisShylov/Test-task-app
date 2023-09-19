import { Box, Typography, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

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
  const { user } = useAuth0();

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
            User info for GitHub
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Nick Name: {user?.nickname}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name: {user?.name}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;
