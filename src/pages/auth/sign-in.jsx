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
import { user_services } from "@/services/userServices";

export function SignIn() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token")
    useEffect(() => {
        if(accessToken != null){
            navigate('/');
        }
    });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleSignIn = async () => {
      if(email != "" && password !=""){
        let data = {
          "email": email,
          "password": password
        }
        user_services
        .findUserByEmailPwd(data)
          .then(response => {
            localStorage.setItem('user_details', JSON.stringify(response.data));
            navigate('/auth/issue-token');
          })
          .catch(error => {
            console.log(error)
          })
      }
  };

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
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="email" label="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type="password" label="Password" size="lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
            {/* <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleSignIn}>
              Sign In
            </Button>
            {/* <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography> */}
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
