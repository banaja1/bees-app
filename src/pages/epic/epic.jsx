import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import React from "react";
import { CreateStory, StoryDetailCard } from "@/widgets/cards";
import {DialogContent } from '@mui/material';
import { epic_services } from "@/services/epicServices";
import { user_details } from "@/data";

export function Epic() {
  const [epicList, setEpicList] = useState([])
  const [open, setOpen] = React.useState(false);


  const handleOpen = (userId) => {
    setOpen(!open);
  }
  const handleOpen2 = () => {
    setOpen(!open);
  }

  const fetchData = () => {
      epic_services
      .getEpic(user_details.WORKSPACEID)
          .then(response => {
            console.log(response.data)
            setEpicList(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    }

  useEffect(() => {
    fetchData();
  },[])
  
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Epics
          </Typography>
        </CardHeader>
        
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["EpicID", "Name" ,"State", "Owner", "Start Date","End Date", "Status",""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {epicList.map(
                ({ _id, name, state,owner, start_date, end_date, status,}, key) => {
                  const className = `py-3 px-5 ${
                    key === epicList.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {_id}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {state}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {owner.map((user, index) => (
                            <li key={index}>{user.name}</li>
                          ))}
                        </Typography>
                      </td>
                      {/* <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {owner}
                        </Typography>
                      </td> */}
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {start_date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {end_date}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {status}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          <Button onClick={()=>handleOpen(_id, title, type,requester, priority, due_date, status,owner)} variant="gradient">View</Button>
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>  
        </CardBody>
      </Card>
         
      <Dialog open={open} handler={handleOpen} maxWidth="sm" fullWidth>
      <DialogContent dividers style={{ overflowY: 'auto', maxHeight: '600px' }}>
        <DialogHeader></DialogHeader>
        <div className="pl-6">
        </div>
        <DialogBody>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
           <StoryDetailCard/>
        </CardBody>
        </DialogBody>
        </DialogContent>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen2}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog> 
    </div>
  );
}

export default Epic;
