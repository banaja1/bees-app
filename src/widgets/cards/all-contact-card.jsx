// import React, { useState, useEffect } from 'react';
// import { organization_services } from '@/services/organizationServices';
// import { crm_services } from '@/services/crmServices';
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
// } from "@material-tailwind/react";

// export function AllContact () {
//   const [empValue, setEmpValue] = useState('');
//   const [error, setError] = useState('');
//   const [empList, setEmpList] = useState([]);
//   const [contactList, setContactList] = useState([]);

//  useEffect(() => {
//     fetchData();
//   },[])

//   const fetchData = () => {
//     organization_services
//       .getEmployeeList()
//       .then(response => {
//         setEmpList(response.data.employees)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//   }

//   const handleSubmit = () => {
//     crm_services
//       .getContactByUser(empValue)
//         .then(response => {
//           console.log("response.data")
//           console.log(response.data)
//           console.log("response.data1")
//           setContactList(response.data)
//         })
//         .catch(error => {
//           console.log(error)
//         })
//   };

//   const onEmpChange = (empValue) => {
//     setEmpValue(empValue.target.value)
//   }

//   return (
//     <div className="container mx-auto flex flex-wrap gap-4">
//       {/* <div className="flex flex-col w-full sm:w-1/2 md:w-1/3"> */}
//         <label className="mb-2">
//           Users:
//           <select
//             className="w-full p-2 border rounded"
//             value={empValue}
//             onChange={onEmpChange}
//           >
//           <option value="">Select User</option>
//             {empList.map((emp) => (
//           <option key={emp.userId} value={emp.userId}>
//             {emp.name}
//           </option>
//         ))}
//           </select>
//         </label>
//       <label className="mb-2">
//       <br></br>
//         {error && <p className="text-red-500">{error}</p>}
//         <button
//           className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </label>
//       <div className='w-full'>
//       <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
//           <table className="w-full min-w-[640px] table-auto">
//             <thead>
//               <tr>
//                 {["Full Name", "Email","Phone", "Company", "Address","Designation", "DoE"].map((el) => (
//                   <th
//                     key={el}
//                     className="border-b border-blue-gray-50 py-3 px-5 text-left"
//                   >
//                     <Typography
//                       variant="small"
//                       className="text-[11px] font-bold uppercase text-blue-gray-400"
//                     >
//                       {el}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {contactList.map(
//                 ({ name, email,phone,company, address, designation, dateOfEntry}, key) => {
//                   const className = `py-3 px-5 ${
//                     key === contactList.length - 1
//                       ? ""
//                       : "border-b border-blue-gray-50"
//                   }`;

//                   return (
//                     <tr key={key}>
//                       <td className={className}>
//                         <div className="flex items-center gap-4">
//                           <div>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               {name}
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className={className}>
//                         <div className="flex items-center gap-4">
//                           <div>
//                             <Typography className="text-xs font-normal text-blue-gray-500">
//                               {email}
//                             </Typography>
//                           </div>
//                         </div>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {phone}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {company}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {address}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {designation}
//                         </Typography>
//                       </td>
//                       <td className={className}>
//                         <Typography className="text-xs font-normal text-blue-gray-500">
//                           {dateOfEntry}
//                         </Typography>
//                       </td>
//                     </tr>
//                   );
//                 }
//               )}
//             </tbody>
//           </table>  
//         </CardBody>
//       </div>
//     </div>
//   );
// };

// export default AllContact;

import React, { useState, useEffect } from 'react';
import { organization_services } from '@/services/organizationServices';
import { crm_services } from '@/services/crmServices';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function AllContact() {
  const [empValue, setEmpValue] = useState('');
  const [error, setError] = useState('');
  const [empList, setEmpList] = useState([]);
  const [ticketList, setTicketList] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [diaryEntries, setDiaryEntries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    organization_services
      .getEmployeeList()
      .then(response => {
        setEmpList(response.data.employees);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubmit = () => {
    crm_services
      .getTicketByUser(empValue)
      .then(response => {
        setTicketList(response.data || []);
        if (response.data && response.data.diary) {
          setDiaryEntries(response.data.diary);
        } else {
          setDiaryEntries([]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onViewClick = (ticket) => {
    setSelectedTicket(ticket);
    setDiaryEntries(ticket.diary || []);
  };

  const onEmpChange = (event) => {
    const selectedUserId = event.target.value;
    setEmpValue(selectedUserId);
    const selectedUser = empList.find(user => user.userId === selectedUserId);
    if (selectedUser) {
      console.log('Selected User:', selectedUser.name, selectedUser.userId);
    }
  };

  return (
    <div className="container mx-auto flex flex-wrap gap-4">
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
              {emp.name}
            </option>
          ))}
        </select>
      </label>
      <label className="mb-2">
        <br />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </label>
      <div className='w-full'>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Ticket Name", "Status", "Description", "CreationDateTime", "contactId", "ContactName", "type", "Actions"].map((el) => (
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
              {ticketList && ticketList.map(
                ({ ticketName, status, _id, diary, description, creationDateTime, contactId, contactName, type }, key) => {
                  const className = `py-3 px-5 ${
                    key === ticketList.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={key}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {ticketName}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {status}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {description}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {creationDateTime}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {contactId}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {contactName}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {type}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        {/* <button onClick={() => onViewClick({ ticketName, status, _id, diary })}>View</button> */}
                        <button
                          onClick={() => onViewClick({ ticketName, status, _id, diary })}
                          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </div>
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>Ticket Name: {selectedTicket.ticketName}</p>
            <p>Status: {selectedTicket.status}</p>
            <p>Diary Entries:</p>
            <ul>
              {diaryEntries.map((entry, index) => (
                <li key={index}>
                  <p>Title: {entry.title}</p>
                  <p>Date Time: {entry.dateTime}</p>
                  <p>Owner: {entry.owner}</p>
                  <p>Description: {entry.description}</p>
                  <p>Action Taken: {entry.actionTaken}</p>
                  <p>Future Action: {entry.futureAction}</p>
                  {index !== diaryEntries.length - 1 && (
                  <>
                    <br />
                    <hr />
                    <br />
                  </>
                )}
                </li>
              ))}
            </ul>
            {/* <button onClick={() => setSelectedTicket(null)}>Close</button> */}
            <br />
            <button
              onClick={() => setSelectedTicket(null)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllContact;





