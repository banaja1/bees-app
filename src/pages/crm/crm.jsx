import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import { timeline_services } from "@/services/timelineServices";
import React from "react";
import { ContactEntry, AllContact, TableTest } from "@/widgets/cards";
import { user_details } from "@/data";

export function Crm() {
  const [taskListData, setTaskListData] = React.useState([]);

  const fetchData = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
      timeline_services
        .getTaskByWIDnUID(user_details.WORKSPACEID,user_details.USERID,formattedDate,formattedDate)
          .then(response => {
            setTaskListData(response.data[0].timeline[0].stories)
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
            Contacts
          </Typography>
        </CardHeader>
        <CardBody> 
          <ContactEntry/>
        </CardBody>
      </Card>
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            All Contact
          </Typography>
        </CardHeader>
        <CardBody>
        <AllContact/>
        </CardBody>
      </Card>
    </div>
  );
}

export default Crm;
