import axios from 'axios';
import { header } from "./apiconfig/header.js";
import { organization } from "./apiconfig/rest_apis.js";

const getEmployeeList = () => {
  return axios({
    url: organization.GET_EMPLOYEE_LIST,
    method: "get",
    headers: header
  });
};

export const organization_services = {
  getEmployeeList,
};