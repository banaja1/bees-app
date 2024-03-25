import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { user_services } from "@/services/userServices";
import React, { useState, useEffect } from 'react';
// import { useForm } from "react-hook-form";

export function MyProfile() {
  const [userDetails, setUserDetails] = useState('')
  const [openAIKey, setOpenAIKey] = useState('');
  const [accessKey, setAccessKey] = useState(localStorage.getItem("access_token"));
  const [showButton1, setShowButton1] = useState(false);

  const getProfile = () => { 
    user_services
      .getProfile()
        .then(response => {
            console.log(response)
            setUserDetails(response.data)
            setOpenAIKey(response.data.openai_key)
        })
        .catch(error => {
          console.log(error)
        })
  }

  useEffect(() => {
    getProfile();
  }, [])

  const onSave = async () => {
      if(openAIKey != ""){
        let data = {
            "openai_key": openAIKey
          }
        user_services
          .updateOpenAIKey(data)
          .then(response => {
            console.log(response)
            window.location.reload(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
  }

  const handleClick = () => {
    window.location.reload(false);
  };

  const toggleButtonEdit1 = () => {
    setShowButton1(!showButton1)
  };

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/profile.jpg"
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {userDetails.name}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {userDetails.email}
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-1 xl:grid-cols-1">
            <ProfileInfoCard
              title="Profile Information"
              name = {userDetails.name}
              mobile = {userDetails.phone}
              email = {userDetails.email}
            />
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-1 xl:grid-cols-1">
            <hr></hr>
          </div>
          <div className="px-4 pb-4">
            <div className="flex flex-wrap">
              <div className="flex-auto">
                <Typography variant="h6" color="blue-gray" className="mb-2">
              Access Key
            </Typography>
              </div>
            </div>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500">
              <input 
              type="text" 
              aria-describedby="helper-text-explanation" 
              className="border-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              defaultValue={accessKey}
              readOnly
              />   
            </Typography>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default MyProfile;
