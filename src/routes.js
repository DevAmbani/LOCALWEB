import React from "react";

import { Icon } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
} from "react-icons/md";
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Current Events",
    layout: "/admin",
    path: "/currentEvents",
    icon: <Icon as={TimeIcon} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Current Bookings",
    layout: "/admin",
    icon: <Icon as={CalendarIcon} width='20px' height='20px' color='inherit' />,
    path: "/currentBooking",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
];

export default routes;
