// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { AddTask } from '.';
// import React, { useState, useEffect } from 'react';
// import { FaUser } from 'react-icons/fa';
// import { organization_services } from '@/services/organizationServices';
// import {
//   Button
// } from "@material-tailwind/react";
// export function CreateEpic() {
//   const [timestamp1, setTimestamp1] = useState('');
//   const [timestamp2, setTimestamp2] = useState('');
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [empList, setEmpList] = useState([]);
//   const [epicTitleValue, setEpicTitleValue] = useState('');
//   const [epicDescriptionValue, setEpicDescriptionValue] = useState('');
//   const [stateList, setStateList] = useState([]);
//   const [stateValue, setStateValue] = useState('');
  
//   useEffect(() => {
//     fetchData();
//   },[])
  
//   const fetchData = () => {
//     organization_services.getEmployeeList()
//         .then(response => {
//           setEmpList(response.data.employees)
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     let states = [{name:"To Do"}, {name:"In Progress"},{name:"Completed"}]
//     setStateList(states)
//   }

//   const createEpic = ()=>{
//     console.log(epicTitleValue)
//     console.log(epicDescriptionValue)
//     console.log(stateValue)
//     console.log(timestamp1)
//     console.log(timestamp2)
//     console.log(selectedItems)
//   }

//   const handleInputChange = (event) => {
//     const { value } = event.target;
//     setInputValue(value);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     if (selectedItems.includes(item)) {
//       setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//     setInputValue('');
//   };

//   const handleDeleteClick = (item) => {
//     setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
//   };

//   return (
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Create Epic</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             A collection of Stories that represent larger initiatives.
//           </p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="col-span-full">
//               <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                 Title
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="street-address"
//                   id="street-address"
//                   autoComplete="street-address"
//                   value={epicTitleValue}
//                   onChange={(e) => setEpicTitleValue(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                 Description
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={3}
//                   value={epicDescriptionValue}
//                   onChange={(e) => setEpicDescriptionValue(e.target.value)}
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about epic.</p>
//             </div>

//             <div className="col-span-full">
//               <label className="mb-2">
//                 State:
//                 <select
//                   className="w-full p-2 border rounded"
//                   value={stateValue}
//                   onChange={(e) => setStateValue(e.target.value)}
//                 >
//                   <option value="">Select Task</option>
//                   {stateList.map((state) => (
//                 <option key={state.name} value={state.name}>
//                   {state.name}
//                 </option>
//               ))}
//                 </select>
//               </label>
//             </div>
//             <div className="col-span-full">
//               <label className="mb-2">
//                 Start Time:
//                 <input
//                   type="datetime-local"
//                   className="w-full p-2 border rounded"
//                   value={timestamp1}
//                   onChange={(e) => setTimestamp1(e.target.value)}
//                 />
//               </label>

//               <label className="mb-2">
//                 End Time:
//                 <input
//                   type="datetime-local"
//                   className="w-full p-2 border rounded"
//                   value={timestamp2}
//                   onChange={(e) => setTimestamp2(e.target.value)}
//                 />
//               </label>
//             </div>

//             <div className="col-span-full">
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <FaUser style={{ marginRight: '5px', cursor: 'pointer' }} onClick={toggleDropdown} />
//                 <span style={{ cursor: 'pointer' }} onClick={toggleDropdown}>
//                   {selectedItems.length > 0 ? `${selectedItems.length} selected` : 'Select'}
//                 </span>
//               </div>
//               {isOpen && (
//                 <div style={{ border: '1px solid #ccc', maxHeight: '100px', overflowY: 'auto' }}>
//                   {/* Example list of items */}
//                   {empList.map(({userId, name}, index) => (
//                     <div
//                       key={index}
//                       onClick={() => handleItemClick({ownerId: userId, name: name})}
//                       style={{
//                         cursor: 'pointer',
//                         padding: '5px',
//                         backgroundColor: selectedItems.includes({ownerId: userId, name: name}) ? '#e6f7ff' : 'inherit'
//                       }}
//                     >
//                       {{ownerId: userId, name: name}}
//                     </div>
//                   ))}
//                 </div>
//               )}
//               <div>
//                 {/* Display selected items */}
//                 {selectedItems.map(({ownerId,name}, index) => (
//                   <span key={index} style={{ marginRight: '5px', backgroundColor: '#f0f0f0', padding: '2px' }}>
//                     {name}{' '}
//                     <button onClick={() => handleDeleteClick({ownerId: ownerId, name: name})}>&times;</button>
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="col-span-full">
//             <Button className="w-full p-2 border rounded"
//               variant="outlined"
//               onClick={() => createEpic()}
//             >
//               Create Epic
//             </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default CreateEpic;

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { AddTask } from '.';
import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { organization_services } from '@/services/organizationServices';
import { team_services } from '@/services/teamServices';
import { workspace_services } from '@/services/workspaceServices';
import { auth_services } from '@/services/authServices';
import { epic_services } from '@/services/epicServices';

import {
  Button
} from "@material-tailwind/react";

export function CreateEpic() {
  const [timestamp1, setTimestamp1] = useState('');
  const [timestamp2, setTimestamp2] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [empList, setEmpList] = useState([]);
  const [epicTitleValue, setEpicTitleValue] = useState('');
  const [epicDescriptionValue, setEpicDescriptionValue] = useState('');
  const [stateList, setStateList] = useState([]);
  const [stateValue, setStateValue] = useState('');
  const [teamList, setTeamList] = useState([]);
  const [workspaceList, setWorkspaceList] = useState([]);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedWorkspace, setSelectedWorkspace] = useState('');
  const [workspaceValue, setWorkspaceValue] = useState('');

  useEffect(() => {
    fetchData();
    fetchTeams();
    fetchWorkspace();
  },[])
  
  const fetchData = () => {
    organization_services.getEmployeeList()
        .then(response => {
          setEmpList(response.data.employees)
        })
        .catch(error => {
          console.log(error)
        })
    let states = [{name:"To Do"}, {name:"In Progress"},{name:"Completed"}]
    setStateList(states)
  }

  const fetchTeams = () => {
    team_services.postTeam()
      .then(response => {
        setTeamList(response.data.teams);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const createEpic = ()=>{
    console.log("264")
    console.log("264")
    console.log("264")
    console.log("264")
    console.log(epicTitleValue)
    console.log(epicDescriptionValue)
    console.log(stateValue)
    console.log(timestamp1)
    console.log(timestamp2)
    console.log(selectedItems)
    console.log("264")
    console.log("264")
    console.log("264")
    console.log("264")
    // const workspaceId = workspaceList.find(workspace => workspace.name === selectedWorkspace)?.id;
    const workspaceId = "6603ececf95c1ad32800864f"
    console.log("workspaceId")
    console.log(selectedWorkspace)
    console.log(selectedWorkspace._id)
    console.log("workspaceId")
    const data = {
      name: epicTitleValue,
      description: epicDescriptionValue,
      state: stateValue,
      start_date: timestamp1,
      end_date: timestamp2,
      workspace: selectedWorkspace._id,
      owner: selectedItems.map(item => ({ ownerId: item.ownerId }))
    };
  
    epic_services.postEpic(data)
      .then(response => {
        console.log('Epic created successfully:', response);
      })
      .catch(error => {
        console.error('Error creating epic:', error);
      });
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const fetchUserDetails = () => {
  auth_services.getUserDetails()
  .then(userDetails => {
    // console.log('User Detail:');
    // console.log('User Details:', userDetails);
    // console.log('User Details:', userDetails.data._id);
    setSelectedUserId(userDetails.data._id);
    fetchWorkspace(userDetails.data._id);
  })
  .catch(error => {
    console.error('Error fetching user details:', error);
  });
// }

  const fetchWorkspace = (userId) => {
    // console.log('User:', userId);
    workspace_services.getWorkspaceListByUser(userId)
      .then(response => {
        // console.log("Workspace List Response:", response);
        if (response.data.workspace_list && response.data.workspace_list.length > 0) {
          // const workspaceNames = response.data.workspace_list.map(workspace => workspace.name);
          const workspaceNames = response.data.workspace_list.map(workspace => ({
            name: workspace.name,
            _id: workspace._id
          }));
          const firstWorkspaceName = workspaceNames[0];
          // console.log("Workspace List Responses:", firstWorkspaceName);
          // console.log("Workspace List Response:", workspaceNames);
          // console.log("Workspace List Responses:", workspaceNames[0]["_id"]);
          setSelectedWorkspace(firstWorkspaceName);
          setWorkspaceList(workspaceNames);
        } else {
          setSelectedWorkspace('');
          setWorkspaceList([]);
        }
      })
      .catch(error => {
        console.log(error);
        setSelectedWorkspace('');
        setWorkspaceList([]);
      });
  };

  // const onWorkspaceChange = (event) => {
  //   const selectedWorkspaceId = event.target.value;
  //   setEmpValue(selectedWorkspaceId);
  //   const selectedWorkspace = workspaceList.find(workspace => workspace.workspaceId === selectedWorkspaceId);
  //   setSelectedUser(selectedWorkspace);
  //   setSelectedUserId(selectedWorkspaceId);
  //   console.log("Selected Workspace1:", selectedWorkspace ? selectedWorkspace.name : "No workspace selected");
  //   console.log("Workspace ID:", selectedWorkspaceId);
  // }

  const handleWorkspaceClick = () => {
    console.log("Workspaces are already fetched for the logged-in user");
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
      // console.log("Selected User ID:", item);
      // console.log("Selected User ID:", item.data._id);
      // console.log("Selected User Name:", item.name);
      setInputValue('');
      // fetchWorkspace(item.ownerId);
    }
    // setInputValue('');
    // fetchWorkspace(item.data._id);
  };

  const handleDeleteClick = (item) => {
    setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
  };

  const onEmpChange = (empValue) => {
    setEmpValue(empValue.target.value)
  }

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Create Epic</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          A collection of Stories that represent larger initiatives.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                value={epicTitleValue}
                onChange={(e) => setEpicTitleValue(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                value={epicDescriptionValue}
                onChange={(e) => setEpicDescriptionValue(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about epic.</p>
          </div>

          <div className="col-span-full">
            <label className="mb-2">
              State:
              <select
                className="w-full p-2 border rounded"
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
              >
                <option value="">Select Task</option>
                {stateList.map((state) => (
                  <option key={state.name} value={state.name}>
                    {state.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="col-span-full">
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
          </div>

          <div className="col-span-full">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaUser style={{ marginRight: '5px', cursor: 'pointer' }} onClick={toggleDropdown} />
              <span style={{ cursor: 'pointer' }} onClick={toggleDropdown}>
                {selectedItems.length > 0 ? `${selectedItems.length} selected` : 'Select'}
              </span>
            </div>
            {isOpen && (
              <div style={{ border: '1px solid #ccc', maxHeight: '100px', overflowY: 'auto' }}>
                {/* Example list of items */}
                {empList.map(({userId, name}, index) => (
                  <div
                    key={index}
                    onClick={() => handleItemClick({ownerId: userId, name: name})}
                    style={{
                      cursor: 'pointer',
                      padding: '5px',
                      backgroundColor: selectedItems.some(item => item.ownerId === userId) ? '#e6f7ff' : 'inherit'
                    }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            )}
            <div>
              {/* Display selected items */}
              {selectedItems.map(({ownerId,name}, index) => (
                <span key={index} style={{ marginRight: '5px', backgroundColor: '#f0f0f0', padding: '2px' }}>
                  {name}{' '}
                  <button onClick={() => handleDeleteClick({ownerId: ownerId, name: name})}>&times;</button>
                </span>
              ))}
            </div>
          </div>

        <div className="col-span-full">
          {/* <label className="mb-2">
            Workspace:
            <select
              className="w-full p-2 border rounded cursor-pointer"
              value={selectedWorkspace}
              onChange={(e) => setSelectedWorkspace(e.target.value)}
            >
              {workspaceList && workspaceList.length > 0 ? (
                workspaceList.map((workspace, index) => (
                  <option key={index} value={workspace}>{workspace}</option>
                ))
              ) : (
                <option disabled>No workspaces available</option>
              )}
            </select>
          </label> */}

          <select
            className="w-full p-2 border rounded cursor-pointer"
            value={selectedWorkspace}
            onChange={(e) => setSelectedWorkspace(e.target.value)}
          >
            {workspaceList && workspaceList.length > 0 ? (
              workspaceList.map((workspace, index) => (
                <option key={index} value={workspace._id}>{workspace.name}</option>
              ))
            ) : (
              <option disabled>No workspaces available</option>
            )}
          </select>
          </div>

          <div className="col-span-full">
            <Button className="w-full p-2 border rounded"
              variant="outlined"
              onClick={() => createEpic()}
            >
              Create Epic
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEpic;
