import axios from 'axios';
import { access } from "./apiconfig/rest_apis.js";

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


export const auth_services = {
  signup,
  login
};