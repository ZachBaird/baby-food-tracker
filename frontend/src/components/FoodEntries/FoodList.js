import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { func } from 'prop-types';
import { GlobalContext } from '../../contexts/GlobalState';
import foodEntryService from '../../services/foodEntryService';
import FoodEntryItem from './FoodEntryItem';
import { getCookieValue, token } from '../../utilities/cookieHelpers';
import './FoodEntries.css';

const propTypes = {
  setNav: func,
};

const FoodList = ({ setNav }) => {
  const { currentFoodEntries, assignFoodEntries} = useContext(GlobalContext);
  const { id } = useParams();

  useEffect(() => {
    const getFoods = async () => {
      const foodEntries = await foodEntryService.getFoodEntries(getCookieValue(token), id);

      if (foodEntries)
        assignFoodEntries(foodEntries);
    };

    setNav('babies');
    getFoods();
  }, []);

  return (
    <div className="page-container">
      { currentFoodEntries.map((foodEntry) => <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />)}
    </div>
  );
};

FoodList.propTypes = propTypes;

export default FoodList;
