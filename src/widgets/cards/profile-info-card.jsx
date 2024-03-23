import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip
} from "@material-tailwind/react";
import {
  PencilIcon,
} from "@heroicons/react/24/solid";
import React, { useState, useEffect } from 'react';


export function ProfileInfoCard({ title, name, email, mobile }) {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userMobile, setUserMobile] = useState('')
  const [showButton2, setShowButton2] = useState(false);

  const handleClick = () => {
    window.location.reload(false);
  };
  
  const toggleButtonEdit2 = () => {
    setShowButton2(!showButton2)
  };

  const onSaveProfileInfo = async()=>{
    console.log("I am here")
    console.log(userName)
    console.log(userEmail)
    console.log(userMobile)
    console.log("I am here")
  }
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="mx-0 mt-0 mb-4 flex items-center justify-between gap-4"
      >
        <Typography variant="h6" color="blue-gray">
          {title}
        </Typography>
        {/* {!showButton2 &&<Tooltip content="Edit Profile">
          <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" onClick={toggleButtonEdit2}/>
        </Tooltip>} */}
      </CardHeader>
      <CardBody className="p-0">
          <ul className="flex flex-col gap-4 p-0">
              <li className="flex items-center gap-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold capitalize"
                >
                  Name:
                </Typography>
                <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    <input 
                    type="text" 
                    id="helper-text" 
                    aria-describedby="helper-text-explanation" 
                    className="border-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    defaultValue={name}
                    onChange={(e) => setUserName(e.target.value)}
                    readOnly={!showButton2}
                    /> 
                  </Typography>
              </li>
              <li className="flex items-center gap-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold capitalize"
                >
                  Mobile:
                </Typography>
                <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    <input 
                    type="text" 
                    id="helper-text" 
                    aria-describedby="helper-text-explanation" 
                    className="border-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    defaultValue={mobile}
                    onChange={(e) => setUserMobile(e.target.value)}
                    readOnly={!showButton2}
                    /> 
                  </Typography>
              </li>
              <li className="flex items-center gap-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold capitalize"
                >
                  Email:
                </Typography>
                <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    <input 
                    type="text" 
                    id="helper-text" 
                    aria-describedby="helper-text-explanation" 
                    className="border-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    defaultValue={email}
                    onChange={(e) => setUserEmail(e.target.value)}
                    readOnly={!showButton2}
                    /> 
                  </Typography>
              </li>
          </ul>
        {showButton2 &&<div className="gird-cols-1 grid gap-12 px-4 lg:grid-cols-6 xl:grid-cols-6">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={onSaveProfileInfo}>Save</button>
           <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={handleClick}>Cancel</button>
          </div>}
      </CardBody>
    </Card>
  );
}

ProfileInfoCard.defaultProps = {
  action: null,
  description: null,
  details: {},
};

ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  details: PropTypes.object,
};

ProfileInfoCard.displayName = "/src/widgets/cards/profile-info-card.jsx";

export default ProfileInfoCard;
