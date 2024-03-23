import React, { useState, useEffect } from 'react';
import { workspace_services } from "@/services/workspaceServices";
import { user_details } from "@/data";
import { timeline_services } from "@/services/timelineServices";
import {
  Typography,
} from "@material-tailwind/react";
import { TableTest } from "@/widgets/cards";

export function TimeLineDetails () {
  const [empValue, setEmpValue] = useState('');
  const [timestamp1, setTimestamp1] = useState('');
  const [timestamp2, setTimestamp2] = useState('');
  const [error, setError] = useState('');
  const [empList, setEmpList] = useState([]);
  const [taskList, setTaskList] = useState([]);



 useEffect(() => {
    fetchData();
  },[])

  const fetchData = () => {
    workspace_services
    .getUserList(user_details.WORKSPACEID)
        .then(response => {
          setEmpList(response.data.user_list)
        })
        .catch(error => {
          console.log(error)
        })
    }
  const getCurrentTime = () => {
    // const now = new Date();
    // const isoString = now.toISOString().slice(0, 16); // Format as YYYY-MM-DDTHH:mm
    // return isoString;

    // Assuming currentTime is in UTC
    const currentTimeUTC = new Date();

    // Set the time zone to IST
    const timeZone = 'Asia/Kolkata';

    // Use the toLocaleString method to convert the current time to IST
    const currentTimeIST = currentTimeUTC.toLocaleString('en-US', { timeZone });
    return currentTimeIST
  };

  const handleSubmit = () => {
    const currentTime = getCurrentTime();

    if (new Date(timestamp1) >= new Date(currentTime) || new Date(timestamp2) >= new Date(currentTime)) {
      setError('Timestamps must be less than the current time.');
      return;
    }

    timeline_services
        .getTaskByWIDnUID(user_details.WORKSPACEID,user_details.USERID,timestamp1,timestamp2)
          .then(response => {
            console.log(response.data[0].timeline)
            setTaskList(response.data[0].timeline)
          })
          .catch(error => {
            console.log(error)
          })

    // Reset error state
    setError('');
  };

  const onEmpChange = (empValue) => {
    setEmpValue(empValue.target.value)
  }

  return (
    <div className="container mx-auto flex flex-wrap gap-4">
      {/* <div className="flex flex-col w-full sm:w-1/2 md:w-1/3"> */}
        <label className="mb-2">
          Users:
          <select
            className="w-full p-2 border rounded"
            value={empValue}
            onChange={onEmpChange}
          >
          <option value="">Select User</option>
            {empList.map((emp) => (
          <option key={emp.userId} value={emp.userId}>
            {emp.fullName}
          </option>
        ))}
          </select>
        </label>
      {/* </div> */}

      {/* <div className="flex flex-col w-full sm:w-1/2 md:w-1/3"> */}
        <label className="mb-2">
          Start Time:
          <input
            type="datetime-local"
            className="w-full p-2 border rounded"
            value={timestamp1}
            onChange={(e) => setTimestamp1(e.target.value)}
          />
        </label>

        <label className="mb-2">
          End Time:
          <input
            type="datetime-local"
            className="w-full p-2 border rounded"
            value={timestamp2}
            onChange={(e) => setTimestamp2(e.target.value)}
          />
        </label>
      {/* </div> */}

      <label className="mb-2">
      <br></br>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </label>
      <div className='w-full'>
        {taskList.map(
          ({ date, total_hr,total_min,stories}, key) => {
            const className = `py-3 px-5 ${
              key === taskList.length - 1
                ? ""
                : "border-b border-blue-gray-50"
            }`;

            return (
              <TableTest date={date} total_hr={total_hr} total_min={total_min} stories={stories}/>
            );
          }
        )}
        </div>
    </div>
  );
};

export default TimeLineDetails;
