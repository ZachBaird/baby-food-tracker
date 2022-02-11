import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import userService from '../services/userService';
import { GlobalContext } from '../contexts/GlobalState';
import { func } from 'prop-types';
import { token, getCookieValue } from '../utilities/cookieHelpers';
import './LoginPage.css';

const propTypes = {
  setCookie: func,
};

const LoginPage = ({ setCookie }) => {
  const { jwtToken, assignJwtToken } = useContext(GlobalContext);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const data = await userService.login(email, pass);
    if (data) {
      assignJwtToken(data.token);
      setCookie(data.token);
    }
  };

  if (!getCookieValue(token) || !jwtToken) {
  return (
    <div className="form-page">
      <div className="form-container">
        <Box component="form">
          <TextField
            required
            id="standard-basic"
            variant="standard"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="standard-basic"
            variant="standard"
            label="Password"
            type="password"
            autoComplete='current-password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button onClick={(e) => handleFormSubmit(e)} className="login-button" variant="outlined"><PowerSettingsNewIcon /></Button>
        </Box>
      </div>
    </div>
  );
  } else {
    return (<></>);
  }
};

LoginPage.propTypes = propTypes;

export default LoginPage;
