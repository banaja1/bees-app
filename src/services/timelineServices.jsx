import axios from 'axios';
import { header } from "./apiconfig/header.js";
import { timeline } from "./apiconfig/rest_apis.js";

const postTimeline = (data) => {
  console.log(data)
  return axios({
    url: timeline.GET_TIMELINE,
    method: "post",
    headers: header, 
    data: data
  });
};

const getTaskByWIDnUID = (workspaceId,userId,startDate,endDate) => {
  return axios({
    url: timeline.GET_TIMELINE+"/filter?userId="+userId+"&startDate="+startDate+"&endDate="+endDate+"&workspaceId="+workspaceId,
    method: "get",
    headers: header
  });
};


export const timeline_services = {
  postTimeline,
  getTaskByWIDnUID
};