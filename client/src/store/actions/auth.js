import axios from 'axios';

export const register = (url, credentials) => dispatch => {
  axios.post(url, credentials)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const login = (url, credentials) => dispatch => {
  axios.post(url, credentials)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}