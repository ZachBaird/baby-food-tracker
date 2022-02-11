import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/users/';

const generateHeaders = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return config;
}

const login = async (email, password) => {
  const params = new URLSearchParams();
  params.append('email', email);
  params.append('password', password);

  const result = await axios.post(`${apiUrl}login`, params);
  return result.data;
}

const getUserInfo  = async (token) => {
  const config = generateHeaders(token);

  const result = await axios.get(`${apiUrl}me`, config);
  return result.data;
};

const userService = {
  login,
  getUserInfo,
};

export default userService;
