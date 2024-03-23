import axios from 'axios';
import { token } from "./apiconfig/rest_apis.js";

const tokenWithoutOrganizationInfo = data => {
  return axios({
    url: token.ISSUE_TOEKN,
    method: "post",
    data: data
  });
};

const tokenWithOrganizationInfo = data => {
  return axios({
    url: token.ISSUE_TOEKN_WITH_COMPANY,
    method: "post",
    data: data
  });
};


export const token_services = {
  tokenWithoutOrganizationInfo,
  tokenWithOrganizationInfo
};