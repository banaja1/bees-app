import React, { useState } from 'react';
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton } from "@material-tailwind/react";

export function AddTask () {
  const [textFields, setTextFields] = useState(['']); // Initial state with one empty text field

  const addTextField = () => {
    setTextFields([...textFields, '']);
  };

  const removeTextField = (index) => {
    const updatedTextFields = [...textFields];
    updatedTextFields.splice(index, 1);
    setTextFields(updatedTextFields);
  };

  const handleTextFieldChange = (index, value) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index] = value;
    setTextFields(updatedTextFields);
  };

  return (
    <div>
      {textFields.map((textField, index) => (
        <div key={index}><p>
          {/* <div className="mt-2">
                <input
                  value={textField}
                  onChange={(e) => handleTextFieldChange(index, e.target.value)}
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>

            <div className="sm:col-span-1">
                <button 
                    onClick={() => removeTextField(index)}>
                    <XMarkIcon className="h-5 w-5" />
                </button>
            </div>
            </div>
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p></div>
      ))}
      <button onClick={addTextField}>
          <PlusIcon className="h-5 w-5" />
    </button>
    </div>
  );
};

export default AddTask;