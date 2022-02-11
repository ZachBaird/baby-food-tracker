import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/babies/'

const generateHeaders = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
};

const getBabies = async (token) => {
  const config = generateHeaders(token);
  const response = await axios.get(apiUrl, config);
  return response.data
};

const createBaby = async (token, baby) => {
  const config = generateHeaders(token);
  const response = await axios.post(apiUrl, baby, config);
  return response.data;
}

const babyService = {
  getBabies,
  createBaby,
};

export default babyService;
