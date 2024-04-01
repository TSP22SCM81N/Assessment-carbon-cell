import React, { useState } from 'react';
import {
    FaSearch,
    FaBars,
    FaHome,
    FaHourglassStart,
    FaQuestionCircle,
    FaWallet,
    FaSun,
    FaBell,
    FaExchangeAlt,
    FaSynagogue,
    FaCommentAlt,
}from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/search",
            name:"Search",
            icon:<FaSearch/>
        },
        {
            path:"/home",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/organization",
            name:"Organization",
            icon:<FaSynagogue/>
        },
        {
            path:"/assets",
            name:"Assets",
            icon:<FaCommentAlt/>
        },
        {
            path:"/trade",
            name:"Trade",
            icon:<FaExchangeAlt/>
        },
        {
            path:"/history",
            name:"History",
            icon:<FaHourglassStart/>
        },
        {
            path:"/wallet",
            name:"Wallet",
            icon:<FaWallet/>
        },
        {
            path:"/notification",
            name:"Notification",
            icon:<FaBell/>
        },
        {
            path:"/support",
            name:"Support",
            icon:<FaQuestionCircle/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaSun/>
        }

    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Carbon Cell</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;