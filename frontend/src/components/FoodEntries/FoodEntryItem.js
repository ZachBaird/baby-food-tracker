import { useContext } from 'react';
import { string, bool } from 'prop-types';
import { GlobalContext } from '../../contexts/GlobalState';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Button from '@mui/material/Button';

const propTypes = {
  babyId: string,
  id: string,
  name: string,
  type: string,
  babyLiked: bool,
};

const FoodEntryItem = ({ babyId, _id, name, type, babyLiked }) => {
  const { assignFoodEntry } = useContext(GlobalContext);

  const babyHasNotHadYet = babyLiked === null;

  const generateColorClass = (type) => {
    switch (type) {
      case 'Vegetables':
        return 'green-border';
      case 'Herbs & Spices':
        return 'yellow-border';
      case 'Starch':
        return 'tan-border';
      case 'Protein':
        return 'red-border';
      case 'Fruits':
        return 'purple-border';
      case 'Dairy':
        return 'teal-border';
      case 'Allergens':
        return 'orange-border';
    }
  };

  const generateCheckmarkClass = (babyHasNotHadYet, babyLiked) => {
    if (babyHasNotHadYet) return 'untried';

    if (babyLiked) return 'liked';
    else return 'not-liked';
  };

  const colorClass = generateColorClass(type);
  const checkmarkClass = generateCheckmarkClass(babyHasNotHadYet, babyLiked);

  const handleClick = () => {
    assignFoodEntry(_id);
  };

  return (
    <Button className={`food-entry-item ${colorClass}`} onClick={() => handleClick()} href={`/babies/${babyId}/${_id}`}>
      <p>{name}</p>
      <CheckBoxIcon className={`food-entry-checkmark ${checkmarkClass}`} />
    </Button>
  );
};

FoodEntryItem.propTypes = propTypes;

export default FoodEntryItem;
