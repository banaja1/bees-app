import { crm_services } from '@/services/crmServices';
import React, { useState, useEffect } from 'react';


export function TicketEntry() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [addressValue, setAddressValue] = useState('');
  const [designationValue, setDesignationValue] = useState('');
  const [error, setError] = useState('');

  const [contactValue, setContactValue] = useState('');
  const [contactList, setContactList] = useState([]);
  const [ticketStatusList, setTicketStatusList] = useState([]);
  const [ticketTypeList, setTicketTypeList] = useState([]);


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
  }

  const handleSubmit = () => {
    let data = {
        "name": nameValue,
        "email": emailValue,
        "address": addressValue,
        "phone": phoneValue,
        "company": companyValue,
        "designation": designationValue
    }
    crm_services.addContact(data)
      .then(response => {
        console.log(response);
        setNameValue('')
        setEmailValue('')
        setAddressValue('')
        setPhoneValue('')
        setCompanyValue('')
        setDesignationValue('')
      })
      .catch(error => {
        console.error(error);
      });
    // Reset error state
    setError('');
  };

  return (
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-2 sm:col-start-1">
                <label className="mb-2">
                Contacts:
                <select
                  className="w-full p-2 border rounded"
                  value={contactValue}
                  onChange={onEmpChange}
                >
                <option value="">Select User</option>
                  {List.map((emp) => (
                <option key={emp.userId} value={emp.userId}>
                  {emp.name}
                </option>
              ))}
                </select>
              </label>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

             <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Company
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

             <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  value={addressValue}
                  onChange={(e) => setAddressValue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

             <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Conatct Person Designation
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
  )
}

export default TicketEntry;