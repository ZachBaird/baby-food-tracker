import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { node } from 'prop-types';
import {
  ASSIGN_BABIES,
  ASSIGN_FOOD_ENTRIES,
  ASSIGN_CURRENT_FOOD_ENTRY,
  ASSIGN_JWT_TOKEN,
  ASSIGN_USER_DATA } from './ActionTypes';
import { token } from '../utilities/cookieHelpers';

// Initial state.
const initialState = {
  babies: [],
  currentFoodEntries: [],
  currentFoodEntry: {},
  jwtToken: '',
  userData: {},
};

const propTypes = {
  children: node.isRequired,
};

// Create context.
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const assignBabies = (newBabies) => {
    dispatch({
      type: ASSIGN_BABIES,
      payload: newBabies,
    });
  };
  
  const assignFoodEntries = (newFoodEntries) => {
    dispatch({
      type: ASSIGN_FOOD_ENTRIES,
      payload: newFoodEntries,
    });
  };

  const assignFoodEntry = (foodEntry) => {
    dispatch({
      type: ASSIGN_CURRENT_FOOD_ENTRY,
      payload: foodEntry,
    });
  };

  const assignJwtToken = (newToken) => {
    if (newToken === '') 
      document.cookie = `${token}=;Max-Age=-999999;`;
    else
      document.cookie = `${token}=${newToken};Max-Age=999999;`;
      
    dispatch({
      type: ASSIGN_JWT_TOKEN,
      payload: newToken,
    });
  };

  const assignUserData = (newUserData) => {
    dispatch({
      type: ASSIGN_USER_DATA,
      payload: newUserData,
    });
  };

  const stateObj = {
    babies: state.babies,
    currentFoodEntries: state.currentFoodEntries,
    currentFoodEntry: state.currentFoodEntry,
    jwtToken: state.jwtToken,
    userData: state.userData,
    assignBabies,
    assignFoodEntries,
    assignFoodEntry,
    assignJwtToken,
    assignUserData,
  };

  return (
    <GlobalContext.Provider value={stateObj}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = propTypes;
