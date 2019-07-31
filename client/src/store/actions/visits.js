import axiosPump from '../../utils/axios';

export const addToVisits = (url) => dispatch => {
  axiosPump().post(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const getVisits = (url) => dispatch => {
  axiosPump().get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const removeFromVisits = (url) => dispatch => {
  axiosPump().delete(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}