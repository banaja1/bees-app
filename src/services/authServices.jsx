import axios from 'axios';
import { access } from "./apiconfig/rest_apis.js";
import { header } from "./apiconfig/header.js";

const signup = data => {
  console.log(data);
  return axios({
    url: access.SIGNUP,
    method: "post",
    data: data
  });
};

const login = data => {
  console.log(data);
  return axios({
    url: access.LOGIN_URL,
    method: "post",
    data: data
  });
};

const getUserDetails = data => {
  console.log(data);
  return axios({
    url: access.USER_DETAILS,
    method: "get",
    headers: header,
    data: data
  });
};

// const getUserDetails = (accessToken) => {
//   return axios.get('http://13.234.252.174:3000/users/get-my-profile', {
//     headers: {
//       Authorization: `Bearer ${accessToken}`
//     }
//   })
//   .then(response => response.data)
//   .catch(error => {
//     console.error('Error fetching user details:', error);
//     throw error;
//   });
// };

export const auth_services = {
  signup,
  login,
  getUserDetails
};