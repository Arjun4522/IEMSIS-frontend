import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { MdDashboard, MdAccountBox } from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdDashboard />,
    cName: 'nav-text',
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <MdAccountBox />,
    cName: 'nav-text',
  },
  {
    title: 'Accademic Overview',
    path: '/accademic-overview',
    icon: <FaIcons.FaBook />,
    cName: 'nav-text',
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },
];
