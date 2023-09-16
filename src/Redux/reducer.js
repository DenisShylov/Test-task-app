import {
  ADD_REPOS,
  FILTER_REPOS,
  LENGTH,
  PAGE_INCREMENT,
} from './actionCreators';

const initialState = {
  repositories: [],
  counterPage: 1,
  dataLength: 0,
  fullReposList: [],
  filterRepositories: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPOS:
      if (action.payload.length > 0) {
        return {
          ...state,
          repositories: [...state.repositories, ...action.payload],
        };
      } else return state;
    case PAGE_INCREMENT: {
      return {
        ...state,
        counterPage: state.counterPage + 1,
      };
    }
    case LENGTH: {
      return {
        ...state,
        fullReposList: action.payload,
        dataLength: action.payload.length,
      };
    }
    case FILTER_REPOS: {
      return {
        ...state,
        filterRepositories: [...action.payload],
      };
    }
    default:
      return state;
  }
};

export default reducer;
