import axios from 'axios';
import { header } from "./apiconfig/header.js";
import { log } from "./apiconfig/rest_apis.js";

const getEmpList = (companyId) => {
  return axios({
    url: log.GET_EMP_LIST+companyId+'/employees',
    method: "get",
    headers: header
  });
};

const getEmpAtd = (companyId, start_date, end_date, userId) => {
  return axios({
    url: log.GET_EMP_ATD+'&start_date='+start_date+'&end_date='+end_date+'&userId='+userId,
    method: "get",
    headers: header
  });
};

export const log_services = {
  getEmpList,
  getEmpAtd
};