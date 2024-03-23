import axios from 'axios';
import { header } from "./apiconfig/header.js";
import { user } from "./apiconfig/rest_apis.js";

const getProfile = () => {
  console.log(header)
  return axios({
    url: user.GET_PROFILE,
    method: "get",
    headers: header
  });
};

const updateOpenAIKey = data => {
  return axios({
    url: user.UPDATE_OPENAI_KEY,
    method: "post",
    headers: header,
    data: data
  });
};

const findUserByEmailPwd = data => {
  return axios({
    url: user.GET_USER_BY_EMAIL_PWD,
    method: "post",
    headers: header,
    data: data
  });
};


export const user_services = {
  getProfile,
  updateOpenAIKey,
  findUserByEmailPwd
};