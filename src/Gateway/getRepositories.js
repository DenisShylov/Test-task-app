import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const getRepositories = async (userName, countRepos, numberPage) => {
  const response = await axios
    .get(
      `${BASE_URL}/${userName}/repos?per_page=${countRepos}&page=${numberPage}`
    )
    .then((response) => {
      if (response.data.length > 0) {
        return response.data;
      } else return [];
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const fetchingReposLength = async (userName) => {
  const response = await axios
    .get(`${BASE_URL}/${userName}/repos?per_page=500`)
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return response;
};
