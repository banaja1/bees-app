
const DEV_URL = "http://localhost:3000";
const PROD_URL = "http://13.234.252.174:3000";


const DEV_URL2 = "http://192.168.29.214:3031";
const PROD_URL2 = "http://13.234.252.174:3030";
const DEVELOPMENT2 = false;

const HOSTNAME2 = DEVELOPMENT2 ? DEV_URL2: PROD_URL2;

export const microServiceDevUrls = {
  // US MICROSERVICE
  US_URL: "http://localhost:3000",

  // TIS MICROSERVICE
  TIS_URL: "http://localhost:3001",

  // ORG MICROSERVICE
  ORG_URL: "http://localhost:3002",

  // CRM MICROSERVICE
  CRM_URL: "http://localhost:3003",

  // ATD MICROSERVICE
  ATD_URL: "http://localhost:3004",
}

export const microServiceProdUrls = {
  // US MICROSERVICE
  US_URL: "http://13.234.252.174:3000",

  // TIS MICROSERVICE
  TIS_URL: "http://13.234.252.174:3001",

  // ORG MICROSERVICE
  ORG_URL: "http://13.234.252.174:3002",

  // CRM MICROSERVICE
  CRM_URL: "http://13.234.252.174:3003",

    // ATD MICROSERVICE
  ATD_URL: "http://13.234.252.174:3004",
}
const DEVELOPMENT = true;

const HOSTNAME = DEVELOPMENT ? microServiceDevUrls: microServiceProdUrls;

// AUTH MODULE
const LOGIN_URL = HOSTNAME + "/auth/login";
const SIGNUP = HOSTNAME + "/signup_login";

// TOKEN ISSUING MODEL
const ISSUE_TOEKN = HOSTNAME.TIS_URL+"/jwttoken/login"
const ISSUE_TOEKN_WITH_COMPANY = HOSTNAME.TIS_URL+"/jwttoken/login-with-organizationinfo"

// USER MODULE
const GET_USER_BY_EMAIL_PWD = HOSTNAME.US_URL+"/users/find-user-by-email-pwd";
const GET_PROFILE = HOSTNAME.US_URL + "/users/get-my-profile";
const UPDATE_OPENAI_KEY = HOSTNAME + "/openai_key";

// ORGANIZATION MODULE
const GET_EMPLOYEE_LIST = HOSTNAME.ORG_URL+"/organizations/get-employee-list";

// GET EMP LIST
const GET_EMP_LIST = HOSTNAME + "/company/"

// STORY MODULE
const GET_STORY = HOSTNAME2 + "/story";

// EPIC MODULE
const GET_EPIC = HOSTNAME2 + "/epic/record";

// TIMELINE MODULE
const GET_TIMELINE = HOSTNAME2 + "/timeline";

// WORKSPACE MODULE
const GET_USER_LIST = HOSTNAME2 + "/workspace/get-user?workspaceId=";

// CRM MODULE
const ADD_CONTACT = HOSTNAME.CRM_URL + "/contacts";
const GET_CONTACT_BY_USER = HOSTNAME.CRM_URL + "/contacts/get-contact-by-userid?id=";

// CRM MODULE
const GET_EMP_ATD = HOSTNAME.ATD_URL + "/attendance/get-employee-attendance?"

export const access = {
  LOGIN_URL,
  SIGNUP
};

export const token = {
  ISSUE_TOEKN,
  ISSUE_TOEKN_WITH_COMPANY
};

export const user = {
  GET_USER_BY_EMAIL_PWD,
  GET_PROFILE,
  UPDATE_OPENAI_KEY
};

export const organization = {
  GET_EMPLOYEE_LIST
};

export const log = {
  GET_EMP_LIST,
  GET_EMP_ATD
};

export const story = {
  GET_STORY
};

export const epic = {
  GET_EPIC
};

export const timeline = {
  GET_TIMELINE
};

export const workspace = {
  GET_USER_LIST
};

export const crm = {
  ADD_CONTACT,
  GET_CONTACT_BY_USER
};