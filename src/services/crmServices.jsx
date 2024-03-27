import axios from 'axios';
import { header } from "./apiconfig/header.js";
import { crm } from "./apiconfig/rest_apis.js";

const addContact = (data) => {
  console.log(header)
  return axios({
    url: crm.ADD_CONTACT,
    method: "post",
    headers: header, 
    data: data
  });
};

const getContactByUser = (userId) => {
  return axios({
    url: crm.GET_CONTACT_BY_USER+userId,
    method: "get",
    headers: header
  });
};

const getContactByOrganization = () => {
  return axios({
    url: crm.GET_CONTACT_BY_ORGANIZATION,
    method: "get",
    headers: header
  });
};

const searchContactInOrganization = (query) => {
  return axios({
    url: crm.SEARCH_CONTACT_IN_ORGANIZATION+query,
    method: "get",
    headers: header
  });
};

export const crm_services = {
  addContact,
  getContactByUser,
  getContactByOrganization,
  searchContactInOrganization
};