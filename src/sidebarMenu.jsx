// import {
//   HomeIcon,
//   UserCircleIcon,
//   TableCellsIcon,
//   BellIcon,
//   ArrowRightOnRectangleIcon,
//   UserPlusIcon,
//   ArrowLeftOnRectangleIcon,
// } from "@heroicons/react/24/solid";
// import { Home } from "@/pages/dashboard";
// import { Attendance } from "@/pages/logdetails";
// import { Story } from "@/pages/story";
// import { Timeline } from "@/pages/timeline";
// import { MyProfile } from "@/pages/profile";
// import { SignOut } from "@/pages/auth";
// import { Contact, Ticket } from "./pages/crm";
// import { Epic } from "./pages/epic";

// const icon = {
//   className: "w-5 h-5 text-inherit",
// };

// export const sidebarMenu = [
//   {
//     layout: "dashboard",
//     pages: [
//       {
//         icon: <HomeIcon {...icon} />,
//         name: "dashboard",
//         path: "/home",
//         element: <Home />,
//       },
//     ],
//   },
//   {
//     layout: "timeline",
//     pages: [
//       {
//         icon: <HomeIcon {...icon} />,
//         name: "timeline",
//         path: "/timeline",
//         element: <Timeline />,
//       },
//     ],
//   },
//   {
//     layout: "epic",
//     pages: [
//       {
//         icon: <HomeIcon {...icon} />,
//         name: "epic",
//         path: "/epic",
//         element: <Epic />,
//       },
//     ],
//   },
//   {
//     layout: "story",
//     pages: [
//       {
//         icon: <HomeIcon {...icon} />,
//         name: "story",
//         path: "/story",
//         element: <Story />,
//       },
//     ],
//   },
//   {
//     layout: "profile",
//     pages: [
//       {
//         icon: <UserCircleIcon {...icon} />,
//         name: "profile",
//         path: "/myprofile",
//         element: <MyProfile />,
//       }
//     ],
//   },
//   {
//     layout: "logdetails",
//     pages: [
//       {
//         icon: <UserCircleIcon {...icon} />,
//         name: "attendance",
//         path: "/attendance",
//         element: <Attendance />,
//       }
//     ],
//   },
//   {
//     title: "crm pages",
//     layout: "crm",
//     pages: [
//       {
//         icon: <UserCircleIcon {...icon} />,
//         name: "Contacts",
//         path: "/contacts",
//         element: <Contact />,
//       },
//       {
//         icon: <UserCircleIcon {...icon} />,
//         name: "Ticket",
//         path: "/tickets",
//         element: <Ticket />,
//       },
//     ],
//   },
//   {
//     // title: "auth pages",
//     layout: "auth",
//     pages: [
//       {
//         icon: <ArrowLeftOnRectangleIcon {...icon} />,
//         name: "sign out",
//         path: "/sign-out",
//         element: <SignOut />,
//       },
//     ],
//   },
//   // {
//   //   layout: "profile",
//   //   pages: [
//   //     {
//   //       icon: <UserCircleIcon {...icon} />,
//   //       name: "test",
//   //       path: "/mytest",
//   //       element: <MyTest />,
//   //     }
//   //   ],
//   // },
// ];

// export default sidebarMenu;

// // import React from "react";

// // import {
// //   HomeIcon,
// //   UserCircleIcon,
// //   ArrowLeftOnRectangleIcon,
// // } from "@heroicons/react/24/solid";
// // import { Home } from "@/pages/dashboard";
// // import { Attendance } from "@/pages/logdetails";
// // import { Story } from "@/pages/story";
// // import { Timeline } from "@/pages/timeline";
// // import { MyProfile } from "@/pages/profile";
// // import { SignOut } from "@/pages/auth";
// // import { Contact, Ticket } from "./pages/crm";
// // import { Epic } from "./pages/epic";

// // const icon = {
// //   className: "w-5 h-5 text-inherit",
// // };

// // export const sidebarMenu = [
// //   {
// //     layout: "dashboard",
// //     pages: [
// //       {
// //         icon: <HomeIcon {...icon} />,
// //         name: "dashboard",
// //         path: "/home",
// //         element: <Home />,
// //       },
// //     ],
// //   },
// //   {
// //     layout: "timeline",
// //     pages: [
// //       {
// //         icon: <HomeIcon {...icon} />,
// //         name: "timeline",
// //         path: "/timeline",
// //         element: <Timeline />,
// //       },
// //     ],
// //   },
// // ];

// // const SidebarMenu = () => {
// //   return (
// //     <div
// //       className="bg-light border-right"
// //       style={{ width: navWidth, height: "100%", overflowY: "auto" }}
// //     >
// //       {sidebarMenu.map((section, index) => (
// //         <div key={index}>
// //           {section.title && <div className="font-bold">{section.title}</div>}
// //           <ul className="mt-4">
// //             {section.pages.map((page, pageIndex) => (
// //               <li key={pageIndex} className="mb-2">
// //                 <a
// //                   href={page.path}
// //                   className="flex items-center text-gray-600 hover:text-gray-800"
// //                 >
// //                   {page.icon}
// //                   <span className="ml-2">{page.name}</span>
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // const navWidth = "250px";

// // export default SidebarMenu;

// sidebarMenu.jsx

import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/dashboard";
import { Attendance } from "@/pages/logdetails";
import { Story } from "@/pages/story";
import { Timeline } from "@/pages/timeline";
import { MyProfile } from "@/pages/profile";
import { SignOut } from "@/pages/auth";
import { Contact, Ticket } from "./pages/crm";
import { Epic } from "./pages/epic";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const sidebarMenu = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    layout: "timeline",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "timeline",
        path: "/timeline",
        element: <Timeline />,
      },
    ],
  },
  {
    layout: "epic",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "epic",
        path: "/epic",
        element: <Epic />,
      },
    ],
  },
  {
    layout: "story",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "story",
        path: "/story",
        element: <Story />,
      },
    ],
  },
  {
    layout: "profile",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/myprofile",
        element: <MyProfile />,
      }
    ],
  },
  {
    layout: "logdetails",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "attendance",
        path: "/attendance",
        element: <Attendance />,
      }
    ],
  },
  {
    title: "crm pages",
    layout: "crm",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Contacts",
        path: "/contacts",
        element: <Contact />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Ticket",
        path: "/tickets",
        element: <Ticket />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        icon: <ArrowLeftOnRectangleIcon {...icon} />,
        name: "sign out",
        path: "/sign-out",
        element: <SignOut />,
      },
    ],
  },
];

export default sidebarMenu;



















