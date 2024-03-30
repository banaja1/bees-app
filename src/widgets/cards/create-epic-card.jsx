import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { AddTask } from '.';
import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { organization_services } from '@/services/organizationServices';
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
  
  useEffect(() => {
    fetchData();
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

  const createEpic = ()=>{
    console.log(epicTitleValue)
    console.log(epicDescriptionValue)
    console.log(stateValue)
    console.log(timestamp1)
    console.log(timestamp2)
    console.log(selectedItems)
  }

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    setInputValue('');
  };

  const handleDeleteClick = (item) => {
    setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
  };

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
                Title
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
                        backgroundColor: selectedItems.includes({ownerId: userId, name: name}) ? '#e6f7ff' : 'inherit'
                      }}
                    >
                      {{ownerId: userId, name: name}}
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