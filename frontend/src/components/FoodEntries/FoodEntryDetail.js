import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalState";
import { func } from "prop-types";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import Checkbox from "@mui/material/Checkbox";
import foodEntryService from "../../services/foodEntryService";
import { token, getCookieValue } from "../../utilities/cookieHelpers";

const propTypes = {
  setNav: func,
};

const label = { inputProps: { "aria-label": "Allergen checkbox" } };

const FoodEntryDetail = ({ setNav }) => {
  const { currentFoodEntry, assignFoodEntry } = useContext(GlobalContext);
  const { babyId, id } = useParams();
  let navigate = useNavigate();

  const [hasBabyTried, setHasBabyTried] = useState(false);
  const [newNotes, setNewNotes] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [babyAllergies, setBabyHadAllergies] = useState(false);

  const successAlert = (
    <Alert
      className="alert"
      severity="success"
      onClose={() => setShowSuccessAlert(false)}
    >
      Changes saved.
    </Alert>
  );
  const errorAlert = (
    <Alert
      className="alert"
      severity="error"
      onClose={() => setShowErrorAlert(false)}
    >
      Error saving changes.
    </Alert>
  );

  useEffect(async () => {
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
      setBabyHadAllergies(entry.hadAllergy ?? false);
    };

    await getFoodEntry();
    setNewNotes(currentFoodEntry?.notes ?? "");
  }, []);

  const foodNotTried = (
    <section className="message-button-section">
      <p>Baby hasn't had this food.</p>
      <div>
        <Button className="baby-liked-btn" onClick={(e) => babyLiked(e)}>
          <ThumbUpIcon />
        </Button>
        <Button className="baby-disliked-btn" onClick={(e) => babyDisliked(e)}>
          <ThumbDownIcon />
        </Button>
      </div>
    </section>
  );
  const foodTried = (
    <section className="message-button-section">
      <p>
        Baby{" "}
        {currentFoodEntry?.babyLiked ? (
          <span className="liked">liked this food!</span>
        ) : (
          <span className="not-liked">disliked this food.</span>
        )}
      </p>
      <div>
        <Button className="baby-liked-btn" onClick={(e) => babyLiked(e)}>
          <ThumbUpIcon />
        </Button>
        <Button className="baby-disliked-btn" onClick={(e) => babyDisliked(e)}>
          <ThumbDownIcon />
        </Button>
      </div>
    </section>
  );

  const allergenMessage =
    currentFoodEntry?.type === "Allergens" ? (
      <p className="allergen-message">
        ALLERGEN ALERT! Consult pediatrician and proceed with caution!
      </p>
    ) : (
      <></>
    );

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
  const setAllergy = async (e, hadAllergies) => {
    const newFoodEntry = { ...currentFoodEntry, hadAllergy: hadAllergies };
    const result = await foodEntryService.updateFoodEntry(
      getCookieValue(token),
      babyId,
      id,
      newFoodEntry
    );
    if (result) assignFoodEntry(result);
    setBabyHadAllergies(result.hadAllergy);
    console.log(babyAllergies);
  };

  const babyLiked = async (e) => {
    await setLike(e, true);
  };
  const babyDisliked = async (e) => {
    await setLike(e, false);
  };

  const babyNoAllergies = async (e) => await setAllergy(e, false);
  const babyHadAllergies = async (e) => await setAllergy(e, true);

  const saveNotes = async (e) => {
    e.preventDefault();
    const newFoodEntry = { ...currentFoodEntry, notes: newNotes };
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
      id
    );

    if (result) {
      assignFoodEntry({});
      navigate(`/babies/${babyId}`);
    }
  };

  const resetFoodEntry = async (e) => {
    e.preventDefault();

    const resetFood = {
      notes: "",
      babyLiked: null,
      hadAllergies: null,
    };

    const result = await foodEntryService.updateFoodEntry(
      getCookieValue(token),
      babyId,
      id,
      resetFood
    );

    if (result) {
      setNewNotes("");
      setHasBabyTried(false);
      assignFoodEntry(result);
      setShowSuccessAlert(true);
      setBabyHadAllergies(false);
      setTimeout(() => setShowSuccessAlert(false), 2500);
    } else {
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 2500);
    }
  };

  return (
    <div
      className="page-container"
      style={{marginBottom: currentFoodEntry?.type === 'Allergens' ? '100px' : '0'}}
    >
      <Button className="back-btn" href={`/babies/${babyId}`}>
        <ArrowBackIosIcon />
      </Button>

      <div className="food-entry-detail-container">
        <section className="upper-section">
          <p
            style={{
              marginLeft: "30px",
              marginTop: "15px",
              marginBottom: "5px",
              fontSize: "34px",
              color: "#eee",
            }}
          >
            {currentFoodEntry?.name}
          </p>
          <p style={{ marginLeft: "35px", marginTop: "0", fontSize: "16px" }}>
            {currentFoodEntry?.type}
          </p>
        </section>

        {hasBabyTried ? foodTried : foodNotTried}
        {allergenMessage}

        <section className="message-button-section">
          <p>No allergic reaction?</p>
          <div>
            <Checkbox
              {...label}
              checked={!babyAllergies}
              onClick={(e) => babyNoAllergies(e)}
              sx={{
                color: "#66BB6A",
                "&.Mui-checked": {
                  color: "#66BB6A",
                },
              }}
            />
            <Checkbox
              {...label}
              checked={babyAllergies}
              onClick={(e) => babyHadAllergies(e)}
              sx={{
                color: "#D81B60",
                "&.Mui-checked": {
                  color: "#D81B60",
                },
              }}
            />
          </div>
        </section>

        {showSuccessAlert ? successAlert : <></>}
        {showErrorAlert ? errorAlert : <></>}

        <Box className="notes-form" component="form">
          <span>Notes:</span>
          <TextareaAutosize
            minRows={2}
            id="outlined-basic"
            label="Notes"
            value={newNotes}
            onChange={(e) => setNewNotes(e.target.value)}
          />
          <Button onClick={(e) => saveNotes(e)} id="outlined-basic">
            <SaveIcon />
          </Button>
        </Box>

        <p>
          Entry last updated:{" "}
          {new Date(currentFoodEntry?.updatedAt).toLocaleDateString()}{" "}
        </p>

        <Button
          className="delete-food-entry-btn"
          onClick={(e) => deleteFoodEntry(e)}
          id="outlined-basic"
        >
          Delete
        </Button>
        <Button onClick={(e) => resetFoodEntry(e)} id="outlined-basic">
          Reset Food
        </Button>
      </div>
    </div>
  );
};

FoodEntryDetail.propTypes = propTypes;

export default FoodEntryDetail;
