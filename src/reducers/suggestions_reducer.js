import { GET_SUGGESTIONS, RESET_SUGGESTIONS } from '../actions/types';

const suggestions = (state = null, action) => {
  switch (action.type) {
    case GET_SUGGESTIONS:
      if (action.error) {
        return false;
      } else return action.payload;
    case RESET_SUGGESTIONS:
      return null;
    default:
      return state;
  }
};
export default suggestions;
