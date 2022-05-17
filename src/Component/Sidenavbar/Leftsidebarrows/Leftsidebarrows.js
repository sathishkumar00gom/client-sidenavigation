import React, { useEffect, useState } from 'react';
import './Leftsidebarrows.css'



const LeftSidebarRows = ({ title, keys }) => {
    const [click, setClick] = useState(false)

    useEffect(() => {

        JSON.parse(localStorage.getItem("s-key"))
        JSON.parse(localStorage.getItem("clicked"))

    }, [])


    const onclick = (keys) => {
        setClick(true)
        localStorage.setItem("s-key", JSON.stringify(keys))
        localStorage.setItem("clicked", JSON.stringify(click))
        console.log("keys", keys)

    }
    return (
        <div id="main" className={`sidebar_row ${click ? "active" : "main"}`}  >
            <h2 style={{ color: "black" }} className="leftsidebarows_title" onClick={() => onclick(keys)}>{title} </h2>

        </div >

    )
}

export default LeftSidebarRows