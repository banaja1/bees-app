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

const getTicketByUser = (ownerId) => {
  console.log(crm.GET_TICKET_BY_USER+ownerId)
  return axios({
    url: crm.GET_TICKET_BY_USER+ownerId,
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

const addTicket = (data) => {
  console.log(header)
  return axios({
    url: crm.ADD_TICKET,
    method: "post",
    headers: header, 
    data: data
  });
};

const getTicket = (data) => {
  console.log(header)
  return axios({
    url: crm.ADD_TICKET,
    method: "get",
    headers: header, 
    data: data
  });
};

// const addDiary = (data) => {
//   console.log(header)
//   return axios({
//     url: crm.ADD_DIARY,
//     method: "post",
//     headers: header, 
//     data: data
//   });
// };

const addDiary = (data) => {
  return axios.post(crm.ADD_DIARY+"/"+data.ticketId+"/diary", data);
}

export const crm_services = {
  addContact,
  getContactByUser,
  getContactByOrganization,
  searchContactInOrganization,
  addTicket,
  getTicket,
  addDiary,
  getTicketByUser
};