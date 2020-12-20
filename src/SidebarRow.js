import React from 'react'
import './SidebarRow.css';

function SidebarRow({title}) {
    return (
        <div className="sidebarRow">
            <h3 className="sidebarRow__title">{title}</h3>
        </div>
    )
}

export default SidebarRow
