import { useContext, useEffect } from 'react';
import { node } from 'prop-types';
import { GlobalContext } from '../contexts/GlobalState';
import { LoginPage } from '../pages';
import { token, getCookieValue } from '../utilities/cookieHelpers';

const propTypes = { children: node };

const Body = ({ children, setNav }) => {
  const { jwtToken, assignJwtToken } = useContext(GlobalContext);

  useEffect(() => {
    const getJwtToken = () => {
      // If we don't have token, check for cookie.
      if (!jwtToken) {
        const cookie = getCookieValue(token);
        if (cookie) assignJwtToken(cookie);
      }
    };

    getJwtToken();
  }, [])
  
  if (jwtToken || getCookieValue(token)) {
    return (
      <div>{children}</div>
    );
  } else {
    return (
      <div><LoginPage /></div>
    );
  }
};

Body.propTypes = propTypes;

export default Body;
