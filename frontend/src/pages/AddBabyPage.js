import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';
import { func } from 'prop-types';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import babyService from '../services/babyService';
import { token, getCookieValue } from '../utilities/cookieHelpers';
import './AddBabyPage.css';

const propTypes = { setNav: func };

const AddBabyPage = ({ setNav }) => {
  const { assignBabies } = useContext(GlobalContext);

  useEffect(() => setNav('addbaby'), []);

  const [name, setName] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const successAlert = <Alert className="alert" severity="success" onClose={() => setShowSuccessAlert(false)}>Success creating baby!</Alert>;
  const errorAlert = <Alert className="alert" severity="error" onClose={() => setShowErrorAlert(false)}>Error creating baby. Did you add a name?</Alert>

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 2000);
      return;
    }

    const newBaby = { name };
    const cookie = getCookieValue(token);

    const baby = await babyService.createBaby(cookie, newBaby);

    if (baby) {
      setName('');
      const babies = await babyService.getBabies(cookie);
      assignBabies(babies);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 2500);
    } else {
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 2500);
    }
  };

  return (
    <div className="page-container">
      <div className="add-babies-container">
        <Box component="form">
          <TextField
            required
            id="standard-basic"
            variant="standard"
            label="Baby's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={(e) => handleSubmit(e)} className="add-baby-button" variant="outlined"><AddCircleIcon /></Button>

        </Box>
        { showSuccessAlert ? successAlert : <></> }
        { showErrorAlert ?  errorAlert : <></> }
      </div>
    </div>
  );
};

AddBabyPage.propTypes = propTypes;

export default AddBabyPage;
