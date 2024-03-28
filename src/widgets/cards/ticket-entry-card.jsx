import { crm_services } from '@/services/crmServices';
import React, { useState, useEffect } from 'react';
import { SearchDropdown } from "@/widgets/cards";


export function TicketEntry() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [designationValue, setDesignationValue] = useState('');
  const [error, setError] = useState('');

  const [contactValue, setContactValue] = useState('');
  const [contactList, setContactList] = useState([]);
  const [ticketStatusList, setTicketStatusList] = useState([]);
  const [ticketTypeList, setTicketTypeList] = useState([]);
  const [statusTypeList, setStatusTypeList] = useState([]);
  const [empValue, setEmpValue] = useState('');
  const [empList, setEmpList] = useState([]);
  // const [statusList, setStatusValue] = useState([]);
  // const [statusList, setStatusValue] = useState([]);
  // const [statusList, setStatusList] = useState([]);
  const [statusValue, setStatusValue] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  
  useEffect(() => {
    fetchData();
  },[])

  const fetchData = () => {
    let ts = [
      {value: "enquiry", name:"ENQUIRY"},
      {value: "info", name:"INFO"},
      {value: "meeting", name:"MEETING"},
      {value: "professional_perspect", name:"PROFESSIONAL_PERSPECT"},
      {value: "scope_and_estimation", name:"SCOPE_AND_ESTIMATION"},
      {value: "negotiation", name:"NEGOTIATION"},
      {value: "close", name:"CLOSE"},
      {value: "cancel", name:"CANCEL"}
    ]
    setTicketStatusList(ts)

    let tt = [
      {value: "sales", name:"SALES"},
      {value: "bug", name:"BUG"}
    ]
    setTicketTypeList(tt)
    setStatusTypeList(ts)
    setEmpList([{ userId: 'sales', name: 'Sales' }]);
    crm_services.getContactByOrganization()
      .then(response => {
        // console.log(response.data)
        setContactList(response.data)
      })
      .catch(error => {
        console.log(error)
      })

  }

  const handleSubmit = () => {
    let data = {
        "contactName": selectedName,
        "type": typeValue,
        "ticketName": addressValue,
        "status": statusValue,
        "description": companyValue,
        "contactId": selectedUserId
    }

    console.log("data")
    console.log(selectedName)
    console.log(selectedUserId)
    console.log(data)
    console.log("data")

    crm_services.addTicket(data)
      .then(response => {
        console.log(response);
        console.log("response1");
        setNameValue('')
        setEmailValue('')
        setTypeValue('')
        setAddressValue('')
        setStatusValue('')
        setCompanyValue('')
        setDesignationValue('')
      })
      .catch(error => {
        console.error(error);
      });
    // Reset error state
    setError('');
  }

  const onContactChange = (contactValue) => {
    setContactValue(contactValue.target.value)
  }

  const onEmpChange = (empValue) => {
    setEmpValue(empValue.target.value)
  }

  // const onStatusChange = (statusValue) => {
  //   setEmpValue(statusValue.target.value);
  // }
  
  const onTypeChange = (event) => {
    setTypeValue(event.target.value);
  }

  const onStatusChange = (event) => {
    setStatusValue(event.target.value);
  }

  const handleSelectedName = (name) => {
    console.log("118")
    console.log(name)
    setSelectedName(name);
  };

  const handleSelectedUserId = (userId) => {
    console.log("126")
    console.log(userId)
    setSelectedUserId(userId);
  };

  return (
      <div className="space-y-12">
         <div className="border-b border-gray-900/10 pb-12">
           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
               {/* <div className="sm:col-span-2 sm:col-start-1">
                 <label className="mb-2">
                 Contacts:
                 <SearchDropdown/>
               </label>
             </div> */}
          <div className="sm:col-span-2 sm:col-start-1">
            <label className="mb-2">
              Contacts:
              {/* <p>Selected Name: {selectedName}</p> */}
              <SearchDropdown onSelectName={handleSelectedName} onSelectUserId={handleSelectedUserId} />
            </label>
          </div>

          <div>
            <label className="mb-2">
              Types:
              <select
                className="w-full p-2 border rounded"
                value={typeValue}
                onChange={onTypeChange}
              >
                <option value="">Select Type</option>
                {ticketTypeList.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Ticket Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  value={addressValue}
                  onChange={(e) => setAddressValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div>
              <label className="mb-2">
              Status:
              <select
                className="w-full p-2 border rounded"
                value={statusValue}
                onChange={onStatusChange}
              >
              <option value="">Select Status</option>
                {statusList.map((emp) => (
              <option key={emp.userId} value={emp.userId}>
                {emp.name}
              </option>
              ))}
                </select>
              </label>
            </div> */}

            <div>
            <label className="mb-2">
              Status:
              <select
                className="w-full p-2 border rounded"
                value={statusValue}
                onChange={onStatusChange}
              >
                <option value="">Select Status</option>
                {statusTypeList.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

             <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  value={companyValue}
                  onChange={(e) => setCompanyValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                ContactId
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  value={designationValue}
                  onChange={(e) => setDesignationValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

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
  )
}

export default TicketEntry;