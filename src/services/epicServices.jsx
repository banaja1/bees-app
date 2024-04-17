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

const postEpic = (data) => {
  console.log(data)
  return axios({
    url: epic.POST_EPIC,
    method: "post",
    headers: header, 
    data: data
  });
};

export const epic_services = {
  getEpic,
  postEpic
};