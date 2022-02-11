import { useState, useEffect, useContext } from 'react';
import { node } from 'prop-types';
import { LoginPage } from '../pages';
import { token, getCookieValue } from '../utilities/cookieHelpers';
import { GlobalContext } from '../contexts/GlobalState';

const propTypes = { children: node };

const Body = ({ children }) => {
  const { jwtToken } = useContext(GlobalContext);
  const [cookie, setCookie] = useState('');
  
  useEffect(() => {
    setCookie(getCookieValue(token));
  });

  if (cookie || getCookieValue(token) || jwtToken) {
    return (
      <div>{children}</div>
    );
  } else {
    return (
      <div><LoginPage setCookie={setCookie} /></div>
    );
  }
};

Body.propTypes = propTypes;

export default Body;
