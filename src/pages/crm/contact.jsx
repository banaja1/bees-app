import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import React from "react";
import { ContactEntry, AllContacts, TableTest } from "@/widgets/cards";
// import { ContactEntry } from "@/widgets/cards";

export function Contact() {

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
        <AllContacts/>
        </CardBody>
      </Card>
    </div>
  );
}

export default Contact;
