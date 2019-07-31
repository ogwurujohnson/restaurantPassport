import axiosPump from '../../utils/axios';


export const getUser = (url) => dispatch => {
  axiosPump().get(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}


export const removeUser = (url) => dispatch => {
  axiosPump().delete(url)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

export const editUser = (url, data) => dispatch => {
  axiosPump().post(url, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
}
