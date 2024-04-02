import { crm_services } from '@/services/crmServices';
import React, { useState, useEffect } from 'react';
import { organization_services } from '@/services/organizationServices';
// import * as rest_apis from './rest_apis';

export function DiaryEntry() {
  const [empValue, setEmpValue] = useState('');
  const [empList, setEmpList] = useState([]);
  const [addressValue, setAddressValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [error, setError] = useState('');
  const [ticketValue, setTicketValue] = useState('');
  const [ticketList, setTicketList] = useState([]);
  const [actionTakenValue, setActionTakenValue] = useState('');
  const [futureActionValue, setFutureActionValue] = useState('');
  const [stageValue, setStageValue] = useState('');
  const [titleValue, setTitleValue] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    fetchData();
    fetchTickets();
  }, []);

  const fetchData = () => {
    organization_services.getEmployeeList()
      .then(response => {
        setEmpList(response.data.employees)
      })
      .catch(error => {
        console.log(error)
      });
  }

  const fetchTickets = () => {
    crm_services.getTicket()
      .then(response => {
        setTicketList(response.data);
        console.log("response.data")
        console.log(response.data)
        console.log("response.data1")
      })
      .catch(error => {
        console.log(error);
      });
  }

  const onEmpChange = (event) => {
    const selectedUserId = event.target.value;
    setEmpValue(selectedUserId);
    const selectedUser = empList.find(emp => emp.userId === selectedUserId);
    setSelectedUser(selectedUser);
    setSelectedUserId(selectedUserId);
    console.log("Selected User:", selectedUser ? selectedUser.name : "No user selected");
    console.log("User ID:", selectedUserId);
  }

  const onTicketChange = (event) => {
    const selectedTicket = event.target.value;
    setTicketValue(selectedTicket);
    const selectedTicketData = ticketList.find(ticket => ticket.ticketId === selectedTicket);
    console.log("Selected Ticket:", selectedTicketData ? selectedTicketData.ticketName : "No ticket selected");
    console.log("Ticket ID:", selectedTicket);
  }

  const handleSubmit = () => {
    if (!selectedUser) {
      setError('Please select a user.');
      return;
    }
    
    let data = {
      "owner": selectedUser.name,
      "ownerId": selectedUserId,
      "ticketId": ticketValue,
      "description": companyValue,
      "actionTaken": actionTakenValue,
      "futureAction": futureActionValue,
      "stage": stageValue,
      "title": titleValue
    };
    console.log("data")
    console.log(data)
    console.log("data")
    crm_services.addDiary(data)
      .then(response => {
        console.log(response);
        setEmpValue('');
        setAddressValue('');
        setCompanyValue('');
        setTicketValue('');
        setActionTakenValue('');
        setFutureActionValue('');
        setStageValue('');
        setTitleValue('');
        setError('');
      })
      .catch(error => {
        console.error(error);
        setError('Error submitting diary entry.');
      });
  }

  return (
    <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
            Tickets:
            <select
              className="w-full p-2 border rounded"
              value={ticketValue}
              onChange={onTicketChange}
            >
              <option value="">Select Ticket</option>
              {Array.isArray(ticketList) && ticketList.map((ticket) => (
                <option key={ticket._id} value={ticket._id}>
                  {ticket.ticketName}
                </option>
              ))}
            </select>
          </label>

          <div className="sm:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
              Description:
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="description"
                id="description"
                autoComplete="off"
                value={companyValue}
                onChange={(e) => setCompanyValue(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="actionTaken" className="block text-sm font-medium leading-6 text-gray-900">
              Action Taken:
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="actionTaken"
                id="actionTaken"
                autoComplete="off"
                value={actionTakenValue}
                onChange={(e) => setActionTakenValue(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="futureAction" className="block text-sm font-medium leading-6 text-gray-900">
              Future Action:
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="futureAction"
                id="futureAction"
                autoComplete="off"
                value={futureActionValue}
                onChange={(e) => setFutureActionValue(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="stage" className="block text-sm font-medium leading-6 text-gray-900">
              Stage:
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="stage"
                id="stage"
                autoComplete="off"
                value={stageValue}
                onChange={(e) => setStageValue(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
              Title:
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="off"
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="w-full">
            {error && <p className="text-red-500">{error}</p>}
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiaryEntry;









