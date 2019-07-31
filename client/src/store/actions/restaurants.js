import axiosPump from '../../utils/axios';

export const addRestaurant = (url, data) => dispatch => {
  axiosPump().post(url, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const getRestaurant = (url) => dispatch => {
  axiosPump().get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const getCityRestaurant = (url) => dispatch => {
  axiosPump().get(url)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
}

export const removeRestaurant = (url) => dispatch => {
  axiosPump().delete(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const editRestaurant = (url, data) => dispatch => {
  axiosPump().post(url, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const addRestaurantReview = (url, data) => dispatch => {
  axiosPump().post(url, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const removeRestaurantReview = (url) => dispatch => {
  axiosPump().delete(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}