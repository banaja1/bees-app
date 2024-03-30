import axios from 'axios';
import { header } from "./apiconfig/header.js";
import { story } from "./apiconfig/rest_apis.js";

const getStory = (workspaceId) => {
  console.log(story.GET_STORY+workspaceId)
  return axios({
    url: story.GET_STORY+workspaceId,
    method: "get",
    headers: header
  });
};

const getStoryByEpic = (workspaceId,epicId) => {
  return axios({
    url: story.GET_STORY+"?workspaceId="+workspaceId+"&epicId="+epicId,
    method: "get",
    headers: header
  });
};


export const story_services = {
  getStory,
  getStoryByEpic
};