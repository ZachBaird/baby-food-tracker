import {
  ASSIGN_BABIES,
  ASSIGN_CURRENT_FOOD_ENTRY,
  ASSIGN_FOOD_ENTRIES,
  ASSIGN_JWT_TOKEN,
  ASSIGN_USER_DATA
} from './ActionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ASSIGN_BABIES:
      return {
        ...state,
        babies: action.payload,
      };
    case ASSIGN_FOOD_ENTRIES:
      return {
        ...state,
        currentFoodEntries: action.payload,
      };
    case ASSIGN_CURRENT_FOOD_ENTRY:
      return {
        ...state,
        currentFoodEntry: action.payload,
      };
    case ASSIGN_JWT_TOKEN:
      return {
        ...state,
        jwtToken: action.payload,
      };
    case ASSIGN_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
