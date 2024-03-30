// import { crm_services } from '@/services/crmServices';
// import React, { useState } from 'react';

// export function SearchDropdown({ onSelectName, onSelectUserId, onSelectCompany }) {
//   console.log("5")
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [contactList, setContactList] = useState([]);

//   const handleInputChange = (event) => {
//     console.log("12")
//     const value = event.target.value;
//     setQuery(value);
//     setIsDropdownOpen(true);
//     crm_services
//     .searchContactInOrganization(value)
//       .then(response => {
//         console.log("Response data:");
//         console.log(response.data);
//         setContactList(response.data)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//     console.log(contactList)
//     const filteredResults = contactList.filter((item) =>
//       item.name.toLowerCase().includes(value.toLowerCase())
//     );
//     setSearchResults(filteredResults);
//   };

//   const handleItemClick = (item) => {
//     setQuery(item.name);
//     setQuery(item.company);
//     setQuery(item.userId);
//     // onSearch(item.name);
//     setIsDropdownOpen(false);
//     onSelectName(item.name);
//     console.log("item.name");
//     console.log(item.name);
//     console.log("item.name");
//     onSelectUserId(item.userId);
//     onSelectCompany(item.company);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleInputChange}
//       />
//       {isDropdownOpen && ( // Render dropdown only if isDropdownOpen is true
//         <div>
//           <ul>
//             {searchResults.map((result) => (
//               <li key={result.id} onClick={() => handleItemClick(result)}>
//                 {result.id}<br></br>
//                 {result.name}<br></br>
//                 {/* {result.userId} */}
//                 {result.company}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {searchResults.length === 0 && query && (
//         <p>No results found</p>
//       )}
//     </div>
//   );
// }
// export default SearchDropdown;

import { crm_services } from '@/services/crmServices';
import React, { useState } from 'react';

export function SearchDropdown({ onSelectName, onSelectUserId, onSelectCompany }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [contactList, setContactList] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setIsDropdownOpen(true);
    crm_services
      .searchContactInOrganization(value)
      .then(response => {
        console.log("Response data:");
        console.log(response.data);
        setContactList(response.data);

        const filteredResults = response.data.filter(item =>
          item.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filteredResults);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleItemClick = (item) => {
    setQuery(item.name);
    setIsDropdownOpen(false);
    onSelectName(item.name);
    onSelectUserId(item.userId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      {isDropdownOpen && (
        <div>
          <ul>
            {searchResults.map((result) => (
              <li key={result.id} onClick={() => handleItemClick(result)}>
                {result.id}<br />
                {result.name}<br />
                {result.company}
              </li>
            ))}
          </ul>
        </div>
      )}
      {searchResults.length === 0 && query && (
        <p>No results found</p>
      )}
    </div>
  );
}

export default SearchDropdown;

