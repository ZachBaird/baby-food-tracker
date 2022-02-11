import { useEffect, useContext } from 'react';
import { func } from 'prop-types';
import { GlobalContext } from '../contexts/GlobalState';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import userService from '../services/userService';
import { token, getCookieValue } from '../utilities/cookieHelpers';
import './ProfilePage.css';

const propTypes = { setNav: func };

const ProfilePage = ({ setNav }) => {
  const { assignJwtToken, userData, assignUserData } = useContext(GlobalContext);

  useEffect(() => setNav('profile'));
  useEffect(() => {
    const setUserData = async () => {
      if (Object.keys(userData).length === 0) {
        const data = await userService.getUserInfo(getCookieValue(token));
        if (data) assignUserData(data);
      }
    };

    setUserData();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    assignJwtToken('');
  };
  
  return (
    <div className="page-container">
      <div className="profile-container">
        <h2><span>Name:</span>  <span>{userData.name}</span></h2>
        <p><span>Email:</span>  <span>{userData.email}</span></p>
      <Button className="logout-button" onClick={(e) => handleLogout(e)} variant="outlined">
        <span>Logout</span>
        <LogoutIcon />  
      </Button>
      </div>

    </div>
  );
};

ProfilePage.propTypes = propTypes;

export default ProfilePage;
