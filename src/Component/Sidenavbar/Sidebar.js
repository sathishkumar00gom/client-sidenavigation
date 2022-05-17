import React from 'react';
import LeftSidebarRows from "./Leftsidebarrows/Leftsidebarrows"
import './Sidenavbar.css';
import CustomComponent from './CustomComponent/CustomComponent';
import { Link } from 'react-router-dom';


const Sidebar = (_title) => {

    return (
        <div className='sidebar'>
            <Link to='/'>
                <LeftSidebarRows title='Home' keys="1" />
            </Link>
            <Link to='/Explore'>
                <LeftSidebarRows title='Explore' keys="2" />
            </Link>
            <Link to='/'>
                <LeftSidebarRows title='Subscriptions' keys="3" />
            </Link>
            <Link to='/'>
                <LeftSidebarRows title="Library" keys="4" />
            </Link>
            <Link to='/'>
                <CustomComponent titles="Show more" keys="10" />
            </Link>
            <Link to='/'>
                <LeftSidebarRows title="History" keys="5" />
            </Link>
            <Link to='/'>
                <LeftSidebarRows title="Your videos" keys="6" />
            </Link>
            <Link to='/'>
                <LeftSidebarRows title="Watch Later" keys="7" />
            </Link>
            <Link to='/'>
                <LeftSidebarRows title="Liked videos" keys="8" />
            </Link>
            <Link to='/'>
                <LeftSidebarRows title="extra" keys="9" />
            </Link>








        </div>
    )
}


export default Sidebar