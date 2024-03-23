import axios from 'axios';
import { workspace } from "./apiconfig/rest_apis.js";
import { header } from "./apiconfig/header.js";

const getUserList = (workspaceId) => {
  return axios({
    url: workspace.GET_USER_LIST+workspaceId,
    method: "get",
    headers: header
  });
};

export const workspace_services = {
  getUserList
};