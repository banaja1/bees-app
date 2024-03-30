import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import { timeline_services } from "@/services/timelineServices";
import React from "react";
import { TimeLineEntry, TimeLineDetails, TableTest } from "@/widgets/cards";
import { user_details } from "@/data";

export function Timeline() {
  const [taskListData, setTaskListData] = React.useState([]);

  const calculateDuration = (startDateTime, endDateTime) =>  {
      const differenceMs = endDateTime - startDateTime;
      const hours = Math.floor(differenceMs / (1000 * 60 * 60)); // 1 hour = 3600000 milliseconds
      const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60)); // 1 minute = 60000 milliseconds
      return { hours, minutes };
  }

  const fetchData = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
      timeline_services
        .getTaskByWIDnUID(user_details.WORKSPACEID,'userId',formattedDate,formattedDate)
          .then(response => {
            setTaskListData(response.data.timeline[0].documents)
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
            Task Entry
          </Typography>
        </CardHeader>
        <CardBody> 
          <TimeLineEntry/>
        </CardBody>
      </Card>
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Todays Task
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["TimelineId","Story", "Task","Start Time", "End Time", "Duration",""].map((el) => (
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
              {taskListData.map(
                ({ _id,story, task,startTime,endTime}, key) => {
                  const { taskName } = task;
                  const { storyTitle } = story;
                  const storyId = story._id;
                  const taskId = task._id;
                  const className = `py-3 px-5 ${
                    key === taskListData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  const startDateTime = new Date(startTime); // Example start date and time
                  const endDateTime = new Date(endTime);
                  const duration = calculateDuration(startDateTime, endDateTime)
                  const hrs = duration.hours
                  const min = duration.minutes
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
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {storyTitle}<br></br>{storyId}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {taskName}<br></br>{taskId}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {startTime}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {endTime}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {hrs} Hrs <br></br> {min} Min
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
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Past Task
          </Typography>
        </CardHeader>
        <CardBody>
        <TimeLineDetails/>
        </CardBody>
      </Card>
    </div>
  );
}

export default Timeline;
