import axios from 'axios';
import { header } from "./apiconfig/header.js";
import { team } from "./apiconfig/rest_apis.js";

const postTeam = (data) => {
  console.log(data)
  return axios({
    url: team.GET_TEAM,
    method: "post",
    headers: header, 
    data: data
  });
};

export const team_services = {
  postTeam
};