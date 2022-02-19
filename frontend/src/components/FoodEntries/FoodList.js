import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { func } from "prop-types";
import InfoModal from './InfoModal';
import NewFoodEntryModal from "./NewFoodEntryModal";
import Button from "@mui/material/Button";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GlobalContext } from "../../contexts/GlobalState";
import foodEntryService from "../../services/foodEntryService";
import FoodEntryItem from "./FoodEntryItem";
import { getCookieValue, token } from "../../utilities/cookieHelpers";
import "./FoodEntries.css";

const propTypes = {
  setNav: func,
};

const FoodList = ({ setNav }) => {
  const { currentFoodEntries, assignFoodEntries } = useContext(GlobalContext);
  const { id } = useParams();
  const [modalInfoOpen, setInfoOpen] = useState(false);
  const [newItemOpen, setNewItemOpen] = useState(false);

  const [allergenFoods, setAllergenFoods] = useState([]);
  const [dairyFoods, setDairyFoods] = useState([]);
  const [fruitFoods, setFruitFoods] = useState([]);
  const [herbsSpicesFoods, setHerbsSpicesFoods] = useState([]);
  const [proteinFoods, setProteinFoods] = useState([]);
  const [starchFoods, setStarchFoods] = useState([]);
  const [vegetableFoods, setVegetableFoods] = useState([]);

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

      const allergens = foodEntries.filter((entry) => entry.type === 'Allergens');
      const dairies = foodEntries.filter((entry) => entry.type === 'Dairy');
      const fruits = foodEntries.filter((entry) => entry.type === 'Fruits');
      const herbsAndSpices = foodEntries.filter((entry) => entry.type === 'Herbs & Spices');
      const protein = foodEntries.filter((entry) => entry.type === 'Protein');
      const starches = foodEntries.filter((entry) => entry.type === 'Starch');
      const vegetables = foodEntries.filter((entry) => entry.type === 'Vegetables');

      setAllergenFoods(allergens);
      setDairyFoods(dairies);
      setFruitFoods(fruits);
      setHerbsSpicesFoods(herbsAndSpices);
      setProteinFoods(protein);
      setStarchFoods(starches);
      setVegetableFoods(vegetables);
    };

    setNav("babies");

    if (currentFoodEntries.length === 0)
      getFoods();
  }, []);

  const alphabeticalSort = (a, b) => {
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;

    return 0;
  };

  const handleSubmission = async (e, newData) => {
    e.preventDefault();

    const result = await foodEntryService.createFoodEntry(
      getCookieValue(token),
      id,
      {
        name: newData.newFoodName,
        type: newData.newFoodType,
        notes: newData.newFoodNotes,
        liked: newData.newFoodLiked,
        hadAllergy: newData.newFoodAllergy,
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
        switch (newData.newFoodType) {
          case 'Allergens':
            setAllergenFoods([...allergenFoods, result]);
            break;
          case 'Dairies':
            setDairyFoods([...dairyFoods, result]);
            break;
          case 'Fruits':
            setFruitFoods([...fruitFoods, result]);
            break;
          case 'Herbs & Spices':
            setHerbsSpicesFoods([...herbsSpicesFoods, result]);
            break;
          case 'Protein':
            setProteinFoods([...setProteinFoods, result]);
            break;
          case 'Starch':
            setStarchFoods([...starchFoods, result]);
            break;
          case 'Vegetables':
            setVegetableFoods([...vegetableFoods, result]);
            break;
        }
      }
    }
  };

  return (
    <div
      style={{ marginBottom: "100px", height: "auto" }}
      className="page-container"
    >
      <InfoModal modalInfoOpen={modalInfoOpen} handleInfoClose={handleInfoClose} />
      <NewFoodEntryModal handleSubmission={handleSubmission} newItemOpen={newItemOpen} handleInfoClose={handleInfoClose} /> 
      
      <div style={{display: 'flex', alignItems: 'center', margin: '10px 0'}}>
      <Button className="info-button" onClick={handleInfoOpen}>
        <InfoIcon className="food-list-info-icon" />
      </Button>
      <Button className="new-button" onClick={handleNewOpen}>
        <AddBoxIcon className="food-list-new-icon" />
      </Button>
      </div>

      { allergenFoods.length !== 0 && (<Accordion className="food-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Allergens</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            { allergenFoods.sort(alphabeticalSort).map((foodEntry) => (
              <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
      { dairyFoods.length !== 0 && (<Accordion className="food-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Dairies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            { dairyFoods.sort(alphabeticalSort).map((foodEntry) => (
              <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
      { fruitFoods.length !== 0 && (<Accordion className="food-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Fruits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            { fruitFoods.sort(alphabeticalSort).map((foodEntry) => (
              <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
      { herbsSpicesFoods.length !== 0 && (<Accordion className="food-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Herbs & Spices</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            { herbsSpicesFoods.sort(alphabeticalSort).map((foodEntry) => (
              <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
      { proteinFoods.length !== 0 && (<Accordion className="food-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Proteins</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            { proteinFoods.sort(alphabeticalSort).map((foodEntry) => (
              <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
      { starchFoods.length !== 0 && (<Accordion className="food-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Starches</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            { starchFoods.sort(alphabeticalSort).map((foodEntry) => (
              <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
      { vegetableFoods.length !== 0 && (<Accordion className="food-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Vegetables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            { vegetableFoods.sort(alphabeticalSort).map((foodEntry) => (
              <FoodEntryItem babyId={id} key={foodEntry._id} {...foodEntry} />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>)}
    </div>
  );
};

FoodList.propTypes = propTypes;

export default FoodList;
