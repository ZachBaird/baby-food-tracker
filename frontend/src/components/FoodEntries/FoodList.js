import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { func } from "prop-types";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CloseIcon from "@mui/icons-material/Close";
import { GlobalContext } from "../../contexts/GlobalState";
import foodEntryService from "../../services/foodEntryService";
import FoodEntryItem from "./FoodEntryItem";
import { getCookieValue, token } from "../../utilities/cookieHelpers";
import "./FoodEntries.css";

const propTypes = {
  setNav: func,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "85vw",
  bgcolor: "#222",
  color: "#ddd",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FoodList = ({ setNav }) => {
  const { currentFoodEntries, assignFoodEntries } = useContext(GlobalContext);
  const { id } = useParams();
  const [modalInfoOpen, setInfoOpen] = useState(false);
  const [newItemOpen, setNewItemOpen] = useState(false);

  const [newFoodName, setFoodName] = useState("");
  const [newFoodType, setFoodType] = useState("");
  const [newFoodLiked, setFoodLiked] = useState(false);
  const [newFoodNotes, setFoodNotes] = useState("");

  const handleInfoOpen = () => setInfoOpen(true);
  const handleInfoClose = () => setInfoOpen(false);

  const handleNewOpen = () => setNewItemOpen(true);
  const handleNewClose = () => setNewItemOpen(false);

  useEffect(() => {
    const getFoods = async () => {
      const foodEntries = await foodEntryService.getFoodEntries(
        getCookieValue(token),
        id
      );

      if (foodEntries) assignFoodEntries(foodEntries);
    };

    setNav("babies");
    getFoods();
  }, []);

  const alphabeticalSort = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return 0;
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    const result = await foodEntryService.createFoodEntry(
      getCookieValue(token),
      id,
      {
        name: newFoodName,
        type: newFoodType,
        notes: newFoodNotes,
        liked: newFoodLiked,
      }
    );

    handleNewClose();

    if (result) {
      const newFoodsList = await foodEntryService.getFoodEntries(
        getCookieValue(token),
        id
      );
      if (newFoodsList) {
        assignFoodEntries(newFoodsList);
      }
    }
  };

  return (
    <div
      style={{ marginBottom: "100px", height: "auto" }}
      className="page-container"
    >
      <Modal
        className="info-modal"
        open={modalInfoOpen}
        onClose={handleInfoClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="modal-title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <span>Info</span>{" "}
            <Button onClick={handleInfoClose}>
              <CloseIcon />
            </Button>
          </Typography>
          <Typography
            className="modal-body"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            This page lists Baby's foods.
            <br />
            <br />
            A grey checkmark means Baby hasn't tried the food.
            <br />
            A green checkmark means Baby likes the food.
            <br />
            A red checkmark means Baby dislikes the food.
            <br />
            <br />
            Click on a food item to go in and add notes, indicate if Baby liked
            the food, and view additional data.
            <br />
            <br />
            When Baby is created, a list of Baby's First 100 Foods is set up for
            you. It's up to you to indicate what foods Baby has already tried,
            and if they liked it. You can delete foods and add new ones.
            <br />
            You should follow any guidance given by your pediatrician when
            having Baby try foods.
          </Typography>
        </Box>
      </Modal>
      <Modal
        className="new-food-modal"
        open={newItemOpen}
        onClose={handleNewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="modal-title"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <span>New Food Entry</span>{" "}
            <Button onClick={handleNewClose}>
              <CloseIcon />
            </Button>
          </Typography>
          <Typography
            className="modal-body"
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Food Name"
              value={newFoodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
            <FormControl fullWidth style={{marginTop: '20px'}}>
              <InputLabel id="demo-simple-select-label">Food Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newFoodType}
                label="Food Type"
                onChange={(e) => setFoodType(e.target.value) }
              >
                <MenuItem value={'Vegetables'}>Vegetables</MenuItem>
                <MenuItem value={'Herbs & Spices'}>Herbs & Spices</MenuItem>
                <MenuItem value={'Starch'}>Starch</MenuItem>
                <MenuItem value={'Protein'}>Protein</MenuItem>
                <MenuItem value={'Fruits'}>Fruits</MenuItem>
                <MenuItem value={'Dairy'}>Dairy</MenuItem>
                <MenuItem value={'Allergens'}>Allergens</MenuItem>
              </Select>
            </FormControl>
            <TextField
              required
              id="standard-basic"
              variant="standard"
              label="Notes"
              value={newFoodNotes}
              onChange={(e) => setFoodNotes(e.target.value)}
            />
            <section className="switch-and-label">
              <label>Did Baby like food?</label>
              <Switch
                checked={newFoodLiked}
                onChange={(e) => setFoodLiked(!newFoodLiked)}
              />
            </section>
            <Button
              className="new-food-btn"
              onClick={(e) => handleSubmission(e)}
            >
              Add
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Button className="info-button" onClick={handleInfoOpen}>
        <InfoIcon className="food-list-info-icon" />
      </Button>
      <Button className="new-button" onClick={handleNewOpen}>
        <AddBoxIcon className="food-list-new-icon" />
      </Button>
      {currentFoodEntries?.sort(alphabeticalSort).map((foodEntry) => (
        <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />
      ))}
    </div>
  );
};

FoodList.propTypes = propTypes;

export default FoodList;
