import {
  fetchingReposLength,
  getRepositories,
} from '../Gateway/getRepositories';

export const ADD_REPOS = 'ADD_REPOS';
export const PAGE_INCREMENT = 'PAGE_INCREMENT';
export const LENGTH = 'LENGTH';
export const FILTER_REPOS = 'FILTER_REPOS';

export const addRepos = (data) => {
  return { type: ADD_REPOS, payload: data };
};

export const counterIncrement = () => {
  return {
    type: PAGE_INCREMENT,
  };
};

export const filterRepos = (data) => {
  return {
    type: FILTER_REPOS,
    payload: data,
  };
};
export const dataLength = (length) => {
  return {
    type: LENGTH,
    payload: length,
  };
};

export const reposLength = (userName) => {
  return async (dispatch) => {
    dispatch(dataLength(await fetchingReposLength(userName)));
  };
};

export const fetchingRepos = (userName, count, numberPage) => {
  return async (dispatch) => {
    dispatch(counterIncrement());
    dispatch(addRepos(await getRepositories(userName, count, numberPage)));
  };
};
