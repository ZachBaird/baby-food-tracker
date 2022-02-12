import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import { func } from 'prop-types';
import BabyCard from '../components/Babies/BabyCard';
import babyService from '../services/babyService';
import { token, getCookieValue } from '../utilities/cookieHelpers';
import './BabiesPage.css';

const propTypes = { setNav: func };

const BabiesPage = ({ setNav }) => {
  const { babies, assignBabies } = useContext(GlobalContext);
  const [showNoBabiesMsg, setShowNoBabiesMsg] = useState(false);

  useEffect(async () => {
    const getBabies = async () => {
      if (babies.length !== 0) return;
      else {
       const babies = await babyService.getBabies(getCookieValue(token));
       assignBabies(babies);
      }
    };
    setNav('babies')
    await getBabies();
    if (babies.length === 0) setShowNoBabiesMsg(true);
    else setShowNoBabiesMsg(false);
  });

  return (
    <div className="page-container">
      <div className="babies-container">
          { showNoBabiesMsg && <p style={{color: '#fff'}}>You haven't added any babies!</p>}
          {babies.map((baby) => <BabyCard key={baby._id} id={baby._id} name={baby.name} />)}
      </div>
    </div>
  );
};

BabiesPage.propTypes = propTypes;

export default BabiesPage;
