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

const createFoodEntry = async (token, babyId, newFood) => {
  const config = generateHeaders(token);
  const params = new URLSearchParams();
  params.append('name', newFood.name);
  params.append('type', newFood.type);
  params.append('babyLiked', newFood.liked);
  params.append('notes', newFood.notes);

  const response = await axios.post(`${apiUrl}${babyId}`, params, config);
  return response.data;
}

const updateFoodEntry = async (token, babyId, foodEntryId, newData) => {
  const config = generateHeaders(token);
  const response = await axios.put(`${apiUrl}${babyId}/${foodEntryId}`, newData, config);
  return response.data;
};

const deleteFoodEntry = async (token, babyId, foodEntryId) => {
  const config = generateHeaders(token);
  const response = await axios.delete(`${apiUrl}${babyId}/${foodEntryId}`, config);
  return response.data;
}

const foodEntryService = {
  getFoodEntries,
  getFoodEntry,
  createFoodEntry,
  updateFoodEntry,
  deleteFoodEntry,
};

export default foodEntryService;
