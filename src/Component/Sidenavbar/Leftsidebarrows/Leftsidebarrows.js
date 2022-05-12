import React from 'react';
import './Leftsidebarrows.css'

const LeftSidebarRows = ({ title }) => {
    return (
        <div className='sidebar_row'>
            <h2 style={{ color: "black" }} className='leftsidebarows_title'>{title}</h2>
            
        </div>
        
    )
}

export default LeftSidebarRows