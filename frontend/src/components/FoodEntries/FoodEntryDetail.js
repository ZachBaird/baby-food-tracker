import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalState";
import { func } from "prop-types";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from '@mui/icons-material/Save';
import foodEntryService from "../../services/foodEntryService";
import { token, getCookieValue } from "../../utilities/cookieHelpers";

const propTypes = {
  setNav: func,
};

const FoodEntryDetail = ({ setNav }) => {
  const { currentFoodEntry, assignFoodEntry } = useContext(GlobalContext);
  const { babyId, id } = useParams();
  let navigate = useNavigate();
  const [hasBabyTried, setHasBabyTried] = useState(false);
  const [newNotes, setNewNotes] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const successAlert = <Alert className="alert" severity="success" onClose={() => setShowSuccessAlert(false)}>Changes saved.</Alert>;
  const errorAlert = <Alert className="alert" severity="error" onClose={() => setShowErrorAlert(false)}>Error saving changes.</Alert>


  useEffect(() => {
    setNav("babies");

    const getFoodEntry = async () => {
      const entry = await foodEntryService.getFoodEntry(
        getCookieValue(token),
        babyId,
        id
      );
      if (entry) assignFoodEntry(entry);

      const babyHasTriedFood = entry.babyLiked !== null;
      setHasBabyTried(babyHasTriedFood);

    };
    
    getFoodEntry();
    setNewNotes(currentFoodEntry?.notes ?? '');
  }, []);

  const foodNotTried = <p>Baby has not tried this food yet.</p>;
  const foodTried = (
    <p>
      Baby{" "}
      {currentFoodEntry?.babyLiked ? (
        <span className="liked">liked this food!</span>
      ) : (
        <span className="not-liked">did not like this food.</span>
      )}
    </p>
  );

  const allergenMessage = currentFoodEntry?.type === 'Allergens' ? (<p className="allergen-message">NOTE: This is an allergen food! Follow instructions from your pediatrician and proceed with caution!</p>) : <></>;

  const setLike = async (e, liked) => {
    e.preventDefault();
    const newFoodEntry = { ...currentFoodEntry, babyLiked: liked };
    const result = await foodEntryService.updateFoodEntry(
      getCookieValue(token),
      babyId,
      id,
      newFoodEntry
    );
    if (result) assignFoodEntry(result);
    setHasBabyTried(true);
  };

  const babyLiked = async (e) => {
    await setLike(e, true);
  };
  const babyDisliked = async (e) => {
    await setLike(e, false);
  };

  const saveNotes = async (e) => {
    e.preventDefault();
    const newFoodEntry = { ... currentFoodEntry, notes: newNotes };
    const result = await foodEntryService.updateFoodEntry(
      getCookieValue(token),
      babyId,
      id,
      newFoodEntry
    );
    if (result) {
      assignFoodEntry(result);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 2500);
    } else {
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 2500);
    }
  };

  const deleteFoodEntry = async (e) => {
    e.preventDefault();

    const result = await foodEntryService.deleteFoodEntry(
      getCookieValue(token),
      babyId,
      id,
    );

    if (result) {
      assignFoodEntry({});
      navigate(`/babies/${babyId}`);
    }
  };

  const resetFoodEntry = async (e) => {
    e.preventDefault();

    const resetFood = {
      notes: '',
      babyLiked: null,
    };

    const result = await foodEntryService.updateFoodEntry(
      getCookieValue(token),
      babyId,
      id,
      resetFood,
    );

    if (result) {
      setNewNotes('');
      setHasBabyTried(false);
      assignFoodEntry(result);
      setShowSuccessAlert(true);
      setTimeout(() => setShowSuccessAlert(false), 2500);
    }  else {
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 2500);
    }
  }

  return (
    <div className="page-container">
      <Button className="back-btn" href={`/babies/${babyId}`}>
        <ArrowBackIosIcon />
      </Button>

      <div className="food-entry-detail-container">
        <section className="upper-section">
          <p style={{marginLeft: '30px', marginTop: '15px', marginBottom: '5px', fontSize: '34px', color: '#eee'}}>{currentFoodEntry?.name}</p>
          <p style={{marginLeft: '35px', marginTop: '0', fontSize: '16px'}}>{currentFoodEntry?.type}</p>
        </section>

        {hasBabyTried ? foodTried : foodNotTried}

        {allergenMessage}

        <section className="button-section">
          <Button className="baby-liked-btn" onClick={(e) => babyLiked(e)}>
            <p>Likes!</p>
            <ThumbUpIcon />
          </Button>
          <Button
            className="baby-disliked-btn"
            onClick={(e) => babyDisliked(e)}
          >
            <p>Dislikes!</p>
            <ThumbDownIcon />
          </Button>
        </section>

        { showSuccessAlert ? successAlert : <></> }
        { showErrorAlert ?  errorAlert : <></> }

        <Box className="notes-form" component="form">
          <span>Notes:</span>
          <TextareaAutosize minRows={2} id="outlined-basic" label="Notes" value={newNotes} onChange={(e) => setNewNotes(e.target.value)} />
          <Button onClick={(e) => saveNotes(e)} id="outlined-basic"><SaveIcon /></Button>
        </Box>

        <p>Entry last updated: {new Date(currentFoodEntry?.updatedAt).toLocaleDateString()} </p>

        <Button className="delete-food-entry-btn" onClick={(e) => deleteFoodEntry(e)} id="outlined-basic">Delete</Button>
        <Button onClick={(e) => resetFoodEntry(e)} id="outlined-basic">Reset Food</Button>
      </div>
    </div>
  );
};

FoodEntryDetail.propTypes = propTypes;

export default FoodEntryDetail;
