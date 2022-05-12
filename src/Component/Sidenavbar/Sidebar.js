import React, { useState } from 'react';
import LeftSidebarRows from "./Leftsidebarrows/Leftsidebarrows"
import './Sidenavbar.css';
import CustomComponent from './CustomComponent/CustomComponent';
import { Link } from 'react-router-dom';

const Sidebar = (title) => {
    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(true)
    }
    return (
        <div className='sidebar'>
            <Link to='/'>
                <LeftSidebarRows title='Home' />
            </Link>
            <LeftSidebarRows title='Explore' />
            <LeftSidebarRows title='Subscriptions' />
            <LeftSidebarRows title="Library" />
            <LeftSidebarRows title="History" />
            <LeftSidebarRows title="Your videos" />
            <LeftSidebarRows title="Watch Later" />
            <LeftSidebarRows title="Liked videos" />
            <LeftSidebarRows title="Liked videos" />
            <LeftSidebarRows title="extra" />
            <CustomComponent titles="Show more" />

        </div>
    )
}


export default Sidebar