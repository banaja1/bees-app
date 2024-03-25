import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { auth_services } from "../../services/authServices";
import { token_services } from "@/services/tokenServices";

export function IssueToken() {
  const [organizationList, setOrganizationList] = useState([]);
  const [organizationValue, setOrganizationValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token")
    useEffect(() => {
        if(accessToken != null){
            navigate('/');
        }
        fetchData();
    });
  
    const fetchData = async () => {
        let user_details = JSON.parse(localStorage.getItem('user_details'))
        setOrganizationList(user_details.organizations)
    }

    const handleSkip = async () => {
      let data = localStorage.getItem('user_details');
      token_services
        .tokenWithoutOrganizationInfo(JSON.parse(data))
        .then(response => {
            localStorage.setItem('access_token', response.data.access_token);
            navigate('/');
        })
    }

    const handleSignIn = async () => {
      if(organizationValue){
        let user_data = JSON.parse(localStorage.getItem('user_details'))
        let user = user_data.user
        let org = getOrganizationRecordById(organizationValue)
        let data = {
          user: user,
          organization: org
        }
        console.log(data)
        token_services
          .tokenWithOrganizationInfo(data)
          .then(response => {
            localStorage.setItem('access_token', response.data.access_token);
            // navigate('/');
            window.location.reload();
          })
          .catch(error => {
            console.log(error)
          })
      }else{
        handleSkip()
      }
  }

  const onOrganizationChange = (epicValue) => {
    setOrganizationValue(epicValue.target.value)
  }

  function getOrganizationRecordById(id) {
    return organizationList.find(record => record.organizationId === id);
}

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white" className="grid place-items-center">
              {/* <p>Bees Project Manager</p> */}
              Select Organization
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <label className="mb-2">
              Organization:
              <select
                className="w-full p-2 border rounded"
                value={organizationValue}
                onChange={onOrganizationChange}
              >
              <option value="">No Organization</option>
                {organizationList.map((organization) => (
              <option key={organization.organizationId} value={organization.organizationId}>
                {organization.organizationName}
              </option>
            ))}
              </select>
            </label>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleSignIn}>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an organization?
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                  onClick={handleSkip}
                >
                  Skip
                </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default IssueToken;
