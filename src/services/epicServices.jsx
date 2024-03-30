import axios from 'axios';
import { header } from "./apiconfig/header.js";
import { epic } from "./apiconfig/rest_apis.js";

const getEpic = (workspaceId) => {
  return axios({
    url: epic.GET_EPIC+workspaceId,
    method: "get",
    headers: header
  });
};

export const epic_services = {
  getEpic,
};