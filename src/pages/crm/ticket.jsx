import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import React from "react";
import { TicketEntry, AllContact, TableTest } from "@/widgets/cards";

export function Ticket() {

  const fetchData = () => {

    }

  useEffect(() => {
    fetchData();
  },[])
  
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Tickets
          </Typography>
        </CardHeader>
        <CardBody> 
          <TicketEntry/>
        </CardBody>
      </Card>
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            All Tickets
          </Typography>
        </CardHeader>
        <CardBody>
        <AllContact/>
        </CardBody>
      </Card>
    </div>
  );
}

export default Ticket;
