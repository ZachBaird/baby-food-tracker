import Modal from "@mui/material/Modal";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { bool, func } from 'prop-types';

const propTypes = {
  modalInfoOpen: bool,
  handleInfoClose: func,
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

const InfoModal = ({ modalInfoOpen, handleInfoClose }) => {
  return (
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
  );
};

InfoModal.propTypes = propTypes;

export default InfoModal;
