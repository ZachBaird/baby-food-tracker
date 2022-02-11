import { string } from 'prop-types';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './BabyCard.css';

const propTypes = {
  id: string.isRequired,
  name: string.isRequired,
};

const BabyCard = ({ id, name }) => {
  return (
    <Button className="baby-card" href={`/babies/${id}`}>
        <p>{name}</p>
        <IconButton aria-label="go-to-baby">
          <ArrowForwardIosIcon className="baby-card-icon" to={`/baby/${id}`} />
        </IconButton>
    </Button>
  )
};

BabyCard.propTypes = propTypes;

export default BabyCard;