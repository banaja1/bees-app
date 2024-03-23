import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { Home, Notifications } from "@/pages/dashboard";
import { Attendance } from "@/pages/logdetails";
import { MyProfile } from "@/pages/profile";
import { SignIn, SignUp, SignOut } from "@/pages/auth";
import IssueToken from "./pages/auth/issue-token";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
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
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "issue token",
        path: "/issue-token",
        element: <IssueToken />,
      },
      {
        icon: <ArrowLeftOnRectangleIcon {...icon} />,
        name: "sign out",
        path: "/sign-out",
        element: <SignOut />,
      },
    ],
  },
];

export default routes;
