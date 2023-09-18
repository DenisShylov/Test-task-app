import React from 'react';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useAuth0 } from '@auth0/auth0-react';

const Settings = () => {
  const { user } = useAuth0();
  return <ModalWindow userName={user?.nickname} />;
};

export default Settings;
