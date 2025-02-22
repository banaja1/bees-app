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
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from 'react';
import { story_services } from "@/services/storyServices";
import React from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CreateStory, StoryDetailCard } from "@/widgets/cards";
import {DialogContent } from '@mui/material';
import { user_details } from "@/data";

export function Story() {
  var page_number = 1

  const [totalPage, setTotalPage] = useState(1)
  const [requestHistoryData, setRequestHistoryData] = useState([])
  const [empListData, setEmpListData] = useState([])
  const [empAtdData, setEmpAtdData] = useState([])
  const [active, setActive] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [queryResponse, setQueryResponse] = React.useState('');
  const [end_date, setEndDate] = React.useState('');
  const [start_date, setStartDate] = React.useState('');
  const [userIdData, setUserIdData] = React.useState('');
  const [storyListData, setStoryListData] = React.useState([]);
  const [storyData, setStoryData] = React.useState([]);

 
  const handleOpen = (userId) => {
    setOpen(!open);
  }
  const handleOpen2 = () => {
    setOpen(!open);
  }

  const fetchData = () => {
      story_services
        .getStory(user_details.WORKSPACEID)
          .then(response => {
            setStoryListData(response.data)
            console.log(response.data)
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
            Stories
          </Typography>
        </CardHeader>
        
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["StoryId", "Story Title" ,"Type", "Requester", "Priority","Due Date", "Status",""].map((el) => (
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
              {storyListData.map(
                ({ _id, title, type,requester, priority, due_date, status,owner}, key) => {
                  const { name } = requester;
                  const className = `py-3 px-5 ${
                    key === storyListData.length - 1
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
                          {title}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {type}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {name}
                        </Typography>
                      </td>
                      {/* <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {owner}
                        </Typography>
                      </td> */}
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {priority}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {due_date}
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

export default Story;
