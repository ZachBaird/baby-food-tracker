import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { func, bool } from 'prop-types';

const propTypes = {
  handleSubmission: func,
  handleNewClose: func,
  newItemOpen: bool,
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

const NewFoodEntryModal = ({ handleSubmission, newItemOpen, handleNewClose }) => {
  const [newFoodName, setFoodName] = useState("");
  const [newFoodType, setFoodType] = useState("");
  const [newFoodLiked, setFoodLiked] = useState(false);
  const [newFoodNotes, setFoodNotes] = useState("");

  return (
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
              onClick={(e) => handleSubmission(e, { newFoodName, newFoodType, newFoodNotes, newFoodLiked })}
            >
              Add
            </Button>
          </Typography>
        </Box>
      </Modal>
  );
};

NewFoodEntryModal.propTypes = propTypes;

export default NewFoodEntryModal;
