/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

// ICONS
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { IconContext } from 'react-icons';

// ROUTING

import { Link } from 'react-router-dom';

// DATA FILE
import { SidebarData } from './SlidebarData';

// STYLES
import './Navbar.css';

export default function NavBar() {
  // console.log(SidebarData);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: '#FFF' }}>
      {/* All the icons now are white */}
      <div className="navbar flex justify-between w-full gap-2">
        <span className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </span>
        <img src="./iemsis-logo-removebg.png" alt="" />
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link
              to="/"
              className="menu-bars flex items-center justify-between w-full pr-2"
            >
              <AiIcons.AiOutlineClose />
              <img src="./iemsis-logo-removebg.png" alt="" />
            </Link>
          </li>

          {SidebarData?.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}
