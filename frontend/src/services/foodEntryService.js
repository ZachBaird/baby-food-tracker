import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/foodentries/'

const generateHeaders = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
};

const getFoodEntries = async (token, babyId) => {
  const config = generateHeaders(token);
  const response = await axios.get(`${apiUrl}${babyId}`, config);
  return response.data;
};

const getFoodEntry = async (token, babyId, foodEntryId) => {
  const config = generateHeaders(token);
  const response = await axios.get(`${apiUrl}${babyId}/${foodEntryId}`, config);
  return response.data;
};

const updateFoodEntry = async (token, babyId, foodEntryId, newData) => {
  const config = generateHeaders(token);
  const response = await axios.put(`${apiUrl}${babyId}/${foodEntryId}`, newData, config);
  return response.data;
};

const foodEntryService = {
  getFoodEntries,
  getFoodEntry,
  updateFoodEntry,
};

export default foodEntryService;
