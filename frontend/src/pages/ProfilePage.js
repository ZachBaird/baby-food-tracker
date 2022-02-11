import { useEffect } from 'react';
import { func } from 'prop-types';

const propTypes = { setNav: func };

const ProfilePage = ({ setNav }) => {
  useEffect(() => setNav('profile'));
  
  return (
    <>profile</>
  );
};

ProfilePage.propTypes = propTypes;

export default ProfilePage;
