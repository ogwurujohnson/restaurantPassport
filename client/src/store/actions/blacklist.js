import axiosPump from '../../utils/axios';

export const addToBlacklist = (url) => dispatch => {
  axiosPump().post(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const getBlacklists = (url) => dispatch => {
  axiosPump().get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const removeFromBlackList = (url) => dispatch => {
  axiosPump().get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}