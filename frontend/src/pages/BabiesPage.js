import { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import { func } from 'prop-types';
import BabyCard from '../components/Babies/BabyCard';
import babyService from '../services/babyService';
import { token, getCookieValue } from '../utilities/cookieHelpers';
import './BabiesPage.css';

const propTypes = { setNav: func };

const BabiesPage = ({ setNav }) => {
  const { babies, assignBabies } = useContext(GlobalContext);

  useEffect(() => {
    const getBabies = async () => {
      if (babies.length !== 0) return;
      else {
       const babies = await babyService.getBabies(getCookieValue(token));
       assignBabies(babies);
      }
    };
    getBabies();
  }, []);

  useEffect(() => setNav('babies'));

  return (
    <div className="page-container">
      <div className="babies-container">
          {babies.map((baby) => <BabyCard key={baby._id} id={baby._id} name={baby.name} />)}
      </div>
    </div>
  );
};

BabiesPage.propTypes = propTypes;

export default BabiesPage;
