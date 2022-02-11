import { useEffect, useContext } from 'react';
import { func } from 'prop-types';
import { GlobalContext } from '../contexts/GlobalState';
import userService from '../services/userService';
import { token, getCookieValue } from '../utilities/cookieHelpers';
import './ProfilePage.css';

const propTypes = { setNav: func };

const ProfilePage = ({ setNav }) => {
  const { userData, assignUserData } = useContext(GlobalContext);

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
  
  return (
    <div className="page-container">
      <div className="profile-container">
        <h2><span>Name:</span><span>{userData.name}</span></h2>
        <p><span>Email:</span><span>{userData.email}</span></p>
      </div>
    </div>
  );
};

ProfilePage.propTypes = propTypes;

export default ProfilePage;
