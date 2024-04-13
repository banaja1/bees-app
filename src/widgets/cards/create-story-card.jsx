/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { AddTask } from '.';

// export function CreateStory() {
//   return (
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Create Story</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             Create story add task and assign to employees.
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
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   defaultValue={''}
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//                 Task
//               </label>
//               <div className="mt-2">
//                 <AddTask/>
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Photo
//               </label>
//               <div className="mt-2 flex items-center gap-x-3">
//                 <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
//                 <button
//                   type="button"
//                   className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
//                 >
//                   Change
//                 </button>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                 Cover photo
//               </label>
//               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                 <div className="text-center">
//                   <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
//                   <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                     >
//                       <span>Upload a file</span>
//                       <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 First name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="first-name"
//                   id="first-name"
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
//                 Last name
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="last-name"
//                   id="last-name"
//                   autoComplete="family-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-4">
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
//                 Country
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="country"
//                   name="country"
//                   autoComplete="country-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 >
//                   <option>United States</option>
//                   <option>Canada</option>
//                   <option>Mexico</option>
//                 </select>
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                 Street address
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="street-address"
//                   id="street-address"
//                   autoComplete="street-address"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2 sm:col-start-1">
//               <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
//                 City
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   autoComplete="address-level2"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
//                 State / Province
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="region"
//                   id="region"
//                   autoComplete="address-level1"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                 ZIP / Postal code
//               </label>
//               <div className="mt-2">
//                 <input
//                   type="text"
//                   name="postal-code"
//                   id="postal-code"
//                   autoComplete="postal-code"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-b border-gray-900/10 pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             We'll always let you know about important changes, but you pick what else you want to hear about.
//           </p>

//           <div className="mt-10 space-y-10">
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
//               <div className="mt-6 space-y-6">
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="comments"
//                       name="comments"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="comments" className="font-medium text-gray-900">
//                       Comments
//                     </label>
//                     <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="candidates"
//                       name="candidates"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="candidates" className="font-medium text-gray-900">
//                       Candidates
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
//                   </div>
//                 </div>
//                 <div className="relative flex gap-x-3">
//                   <div className="flex h-6 items-center">
//                     <input
//                       id="offers"
//                       name="offers"
//                       type="checkbox"
//                       className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                     />
//                   </div>
//                   <div className="text-sm leading-6">
//                     <label htmlFor="offers" className="font-medium text-gray-900">
//                       Offers
//                     </label>
//                     <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//                   </div>
//                 </div>
//               </div>
//             </fieldset>
//             <fieldset>
//               <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
//               <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-everything"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
//                     Everything
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-email"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
//                     Same as email
//                   </label>
//                 </div>
//                 <div className="flex items-center gap-x-3">
//                   <input
//                     id="push-nothing"
//                     name="push-notifications"
//                     type="radio"
//                     className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//                   />
//                   <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
//                     No push notifications
//                   </label>
//                 </div>
//               </div>
//             </fieldset>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default CreateStory;

// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { AddTask } from '.';

// export function CreateStory() {
//   return (
//     <div className="space-y-12">
//       <div className="border-b border-gray-900/10 pb-12">
//         <h2 className="text-base font-semibold leading-7 text-gray-900">Create Story</h2>
//         <p className="mt-1 text-sm leading-6 text-gray-600">
//           Create story add task and assign to employees.
//         </p>

//         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//           <div className="col-span-full">
//             <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//               Title
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 name="street-address"
//                 id="street-address"
//                 autoComplete="street-address"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div className="col-span-full">
//             <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//               Description
//             </label>
//             <div className="mt-2">
//               <textarea
//                 id="about"
//                 name="about"
//                 rows={3}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 defaultValue={''}
//               />
//             </div>
//             <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//           </div>

//           <div className="col-span-full">
//             <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//               Task
//             </label>
//             <div className="mt-2">
//               <AddTask/>
//             </div>
//             <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateStory;

// import React, { useState, useEffect } from 'react';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
// import { AddTask } from '.';
// import { organization_services } from '@/services/organizationServices';
// import DatePicker from 'react-datepicker';
// import { workspace_services } from '@/services/workspaceService';

// export function CreateStory() {
//   // State for managing the user selection
//   const [selectedUser, setSelectedUser] = useState('');
  
//   // State for managing the status selection
//   const [status, setStatus] = useState('Assign');
//   const [empValue, setEmpValue] = useState('');
//   const [empList, setEmpList] = useState([]);
//   const [dueDate, setDueDate] = useState(null);
//   const [workspaceValue, setWorkspaceValue] = useState('');
//   const [workspaceList, setWorkspaceList] = useState([]);

//   useEffect(() => {
//     fetchData();
//   },[])

//   const fetchData = () => {
//     organization_services.getEmployeeList()
//         .then(response => {
//           // console.log(response.data.employees)
//           setEmpList(response.data.employees)
//           console.log("429");
//           console.log("Data fetched successfully:", response.data.employees);
//           console.log("431");
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     }

//     workspace_services.getWorkspaceList()
//         .then(response => {
//           setWorkspaceList(response.data.workspaces);
//           console.log("Data fetched successfully:", response.data.workspaces);
//         })
//         .catch(error => {
//           console.log("Error fetching workspace data:", error);
//         });
//   }

//   // Function to handle status selection change
//   const handleStatusChange = (event) => {
//     setStatus(event.target.value);
//   };

//   const onEmpChange = (empValue) => {
//     setEmpValue(empValue.target.value)
//   }

//   const onWorkspaceChange = (workspaceValue) => {
//     setWorkspaceValue(workspaceValue.target.value);
//   }

//   return (
//     <div className="space-y-12">
//       <div className="border-b border-gray-900/10 pb-12">
//         <h2 className="text-base font-semibold leading-7 text-gray-900">Create Story</h2>
//         <p className="mt-1 text-sm leading-6 text-gray-600">
//           Create story, add task, and assign to employees.
//         </p>

//         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//           <div className="col-span-full">
//             <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//               Title
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 name="street-address"
//                 id="street-address"
//                 autoComplete="street-address"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div className="col-span-full">
//             <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
//               Description
//             </label>
//             <div className="mt-2">
//               <textarea
//                 id="about"
//                 name="about"
//                 rows={3}
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 defaultValue={''}
//               />
//             </div>
//             <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//           </div>

//           <div className="col-span-full">
//             <label htmlFor="task" className="block text-sm font-medium leading-6 text-gray-900">
//               Task
//             </label>
//             <div className="mt-2">
//               <AddTask />
//             </div>
//             <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
//           </div>

//           {/* New field for status */}
//           <div className="col-span-full">
//             <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
//               Status
//             </label>
//             <div className="mt-2">
//               <select
//                 id="status"
//                 name="status"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 value={status}
//                 onChange={handleStatusChange}
//               >
//                 <option value="Assign">Assign</option>
//                 <option value="Complete">Complete</option>
//               </select>
//             </div>
//           </div>

//           {/* New field for user */}
//           <div className="col-span-full">
//             {/* <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
//               User
//             </label> */}
//             <div className="mt-2">
//             <label className="mb-2">
//           Users:
//           <select
//             className="w-full p-2 border rounded"
//             value={empValue}
//             onChange={onEmpChange}
//           >
//           <option value="">Select User</option>
//             {empList.map((emp) => (
//           <option key={emp._id} value={emp._id}>
//             {emp.name}
//           </option>
//         ))}
//           </select>
//         </label>
//             </div>
//           </div>

//           <div className="col-span-full">
//             {/* <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
//               User
//             </label> */}
//             <div className="mt-2">
//             <label className="mb-2">
//           Requestor:
//           <select
//             className="w-full p-2 border rounded"
//             value={empValue}
//             onChange={onEmpChange}
//           >
//           <option value="">Select Requestor</option>
//             {empList.map((emp) => (
//           <option key={emp._id} value={emp._id}>
//             {emp.name}
//           </option>
//         ))}
//           </select>
//         </label>
//             </div>
//           </div>

//           <div className="col-span-full">
//             {/* <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
//               User
//             </label> */}
//             <div className="mt-2">
//             <label className="mb-2">
//           Owner:
//           <select
//             className="w-full p-2 border rounded"
//             value={empValue}
//             onChange={onEmpChange}
//           >
//           <option value="">Select Owner</option>
//             {empList.map((emp) => (
//           <option key={emp._id} value={emp._id}>
//             {emp.name}
//           </option>
//         ))}
//           </select>
//         </label>
//             </div>
//           </div>

//           <div className="col-span-full">
//             <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//               Type:
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 name="street-address"
//                 id="street-address"
//                 autoComplete="street-address"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div className="col-span-full">
//             <label htmlFor="due-date" className="block text-sm font-medium leading-6 text-gray-900">
//               Due Date
//             </label>
//             <div className="mt-2 relative">
//               <DatePicker
//                 id="due-date"
//                 selected={dueDate}
//                 onChange={(date) => setDueDate(date)}
//                 className="block w-full rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//               />
//               <svg className="w-6 h-6 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 2a8 8 0 015.657 13.657l-3.536 3.536a1 1 0 01-1.414 0l-3.536-3.536A8 8 0 0110 2zm0 2a6 6 0 00-4.243 10.243L10 16.485l4.243-4.242A6 6 0 0010 4z" clipRule="evenodd" />
//               </svg>
//             </div>
//           </div>

//           <div className="col-span-full">
//             <label htmlFor="workspace" className="block text-sm font-medium leading-6 text-gray-900">
//               Workspace
//             </label>
//             <div className="mt-2">
//               <select
//                 id="workspace"
//                 name="workspace"
//                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
//                 value={workspaceValue}
//                 onChange={onWorkspaceChange}
//               >
//                 <option value="">Select Workspace</option>
//                 {workspaceList.map((workspace) => (
//                   <option key={workspace.id} value={workspace.id}>
//                     {workspace.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
// export default CreateStory;

import React, { useState, useEffect } from 'react';
import { organization_services } from '@/services/organizationServices';
import DatePicker from 'react-datepicker';
import { workspace_services } from '@/services/workspaceServices';
import { AddTask } from '.';

export function CreateStory() {
  // State for managing the user selection
  const [selectedUser, setSelectedUser] = useState('');
  
  // State for managing the status selection
  const [status, setStatus] = useState('Assign');
  const [empValue, setEmpValue] = useState('');
  const [empList, setEmpList] = useState([]);
  const [dueDate, setDueDate] = useState(null);
  const [workspaceValue, setWorkspaceValue] = useState('');
  const [workspaceList, setWorkspaceList] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = () => {
    organization_services.getEmployeeList()
        .then(response => {
          setEmpList(response.data.employees);
          console.log("Data fetched successfully:", response.data.employees);
        })
        .catch(error => {
          console.log(error)
        });

        workspace_services.getWorkspaceList()
        .then(response => {
          setWorkspaceList(response.data.workspaces);
          console.log("Data fetched successfully:", response.data.workspaces);
        })
        .catch(error => {
          console.log("Error fetching workspace data:", error);
        });
  }

  // Function to handle status selection change
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const onEmpChange = (empValue) => {
    setEmpValue(empValue.target.value)
  }

  const onWorkspaceChange = (workspaceValue) => {
    setWorkspaceValue(workspaceValue.target.value);
  }

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Create Story</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Create story, add task, and assign to employees.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>

          <div className="col-span-full">
            <label htmlFor="task" className="block text-sm font-medium leading-6 text-gray-900">
              Task
            </label>
            <div className="mt-2">
              <AddTask />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
          </div>

          <div className="col-span-full">
            <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
              Status
            </label>
            <div className="mt-2">
              <select
                id="status"
                name="status"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={status}
                onChange={handleStatusChange}
              >
                <option value="Assign">Assign</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
              User
            </label>
            <div className="mt-2">
              <label className="mb-2">
                Users:
                <select
                  className="w-full p-2 border rounded"
                  value={empValue}
                  onChange={onEmpChange}
                >
                  <option value="">Select User</option>
                  {empList.map((emp) => (
                    <option key={emp._id} value={emp._id}>
                      {emp.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="workspace" className="block text-sm font-medium leading-6 text-gray-900">
              Workspace
            </label>
            <div className="mt-2">
              <select
                id="workspace"
                name="workspace"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                value={workspaceValue}
                onChange={onWorkspaceChange}
              >
                <option value="">Select Workspace</option>
                {workspaceList.map((workspace) => (
                  <option key={workspace.id} value={workspace.id}>
                    {workspace.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Type:
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="due-date" className="block text-sm font-medium leading-6 text-gray-900">
              Due Date
            </label>
            <div className="mt-2 relative">
              <DatePicker
                id="due-date"
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                className="block w-full rounded-md border-0 py-1.5 pl-10 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
              <svg className="w-6 h-6 text-gray-400 absolute top-1/2 left-3 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a8 8 0 015.657 13.657l-3.536 3.536a1 1 0 01-1.414 0l-3.536-3.536A8 8 0 0110 2zm0 2a6 6 0 00-4.243 10.243L10 16.485l4.243-4.242A6 6 0 0010 4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CreateStory;





