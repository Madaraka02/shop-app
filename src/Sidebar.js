import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="Male shoes"/>
            <SidebarRow title="Male clothes"/>
            <SidebarRow title="Female shoes"/>
            <SidebarRow title="Female clothes"/>
            <SidebarRow title="Kids shoes"/>
            <SidebarRow title="Kids clothes"/>
        </div>
    )
}

export default Sidebar
