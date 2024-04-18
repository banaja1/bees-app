import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import { log_services } from "@/services/logServices";
import React from "react";
import {DialogContent } from '@mui/material';
import { organization_services } from "@/services/organizationServices";

export function Attendance() {
  var page_number = 1

  const [empListData, setEmpListData] = useState([])
  const [empAtdData, setEmpAtdData] = useState([])
  const [active, setActive] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [end_date, setEndDate] = React.useState('');
  const [start_date, setStartDate] = React.useState('');
  const [userIdData, setUserIdData] = React.useState('');
 
 const getLastDayOfMonth = (year, month) => {
  const lastDay = new Date(year, month, 0).getDate();
  const formattedDate = new Date(year, month - 1, lastDay+1).toISOString().split('T')[0];
  console.log(formattedDate)
  return formattedDate;
}

 const setStartEndDate=() =>{
  var m = document.getElementById("month");
  var mvalue = m.value;
  var y = document.getElementById("year");
  var yvalue = y.value;
  const year = yvalue; // Replace with the desired year
  const month = mvalue;   // Replace with the desired month (1-12)
  const lastDayOfMonth = getLastDayOfMonth(year, month);
  var firstDay = year+'-'+month+'-01'
  handleOpen3(userIdData,firstDay,lastDayOfMonth)

 }
  const handleOpen3 = (uid,sd,ed) => {
    var companyId = localStorage.getItem("company_id")
    console.log(ed)
    log_services
      .getEmpAtd(companyId, sd, ed, uid)
        .then(response => {
          setEmpAtdData(response.data.employee[0].attendance)
        })
        .catch(error => {
          console.log(error)
        })
  }
  const handleOpen = (userId) => {
    setUserIdData(userId)
    log_services
      .getEmpAtd(start_date, end_date, userId)
        .then(response => {
          setEmpAtdData(response.data.employee[0].attendance)
        })
        .catch(error => {
          console.log(error)
        })

    setOpen(!open);
  }
  const handleOpen2 = () => {
    setOpen(!open);
  }
 

  const fetchData = () => {
  const currentDate = new Date();
  currentDate.setDate(1);
  currentDate.setDate(0);
  const lastDateOfLastMonth = currentDate;
  setEndDate(lastDateOfLastMonth.toISOString().split('T')[0])
  
  currentDate.setDate(1);
  const firstDateOfLastMonth = currentDate;
  setStartDate(firstDateOfLastMonth.toISOString().split('T')[0])
  organization_services
    .getEmployeeList()
    .then(response => {
      setEmpListData(response.data.employees)
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
            Attendance History
          </Typography>
        </CardHeader>
        
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["UserId", "Name" ,"Email", "Status", "Role",""].map((el) => (
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
              {empListData.map(
                ({ userId, name, email, status, role}, key) => {
                  const className = `py-3 px-5 ${
                    key === empListData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {userId}
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
                          {email}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {status}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {role}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          <Button onClick={()=>handleOpen(userId)} variant="gradient">View</Button>
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
        Month:
          <select
            id="month"
            name="month"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option value="1">JANUARY</option>
            <option value ="2">FEBRUARY</option>
            <option value="3">MARCH</option>
            <option value="4">APRIL</option>
            <option value="5">MAY</option>
            <option value="6">JUNE</option>
            <option value="7">JULY</option>
            <option value="8">AUGUST</option>
            <option value="9">SEPTEMEBER</option>
            <option value="10">OCTOBER</option>
            <option value="11">NOVEMBER</option>
            <option value="12">DECEMBER</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Year:
          <select
            id="year"
            name="year"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option value ="2024">2024</option>
            <option value ="2023">2023</option>
            <option value="2022">2022</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={()=>setStartEndDate()}
            type="submit"
            className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Attendnace
          </button>
        </div>
        <DialogBody>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[490px] table-auto">
            <thead>
              <tr>
                {["Date", "In" ,"Out"].map((el) => (
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
              {empAtdData.map(
                ({ punch_date, punch_in_time, punch_out_time}, key) => {
                  const className = `py-3 px-5 ${
                    key === empListData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {punch_date}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {punch_in_time}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          {punch_out_time}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>  
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

export default Attendance;
