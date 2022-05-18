import React, { useEffect, useState } from 'react';
import './Leftsidebarrows.css'



const LeftSidebarRows = ({ title, keys, onClick }) => {
    const [click, setClick] = useState(
        JSON.parse(localStorage.getItem("s-key"))

    )

    console.log(JSON.parse(localStorage.getItem("s-key")), "main")







    const onclick = (keys, title) => {
        setClick(keys)
        localStorage.setItem("s-key", JSON.stringify(keys))

        console.log("keys", keys)
        onClick(title)

    }
    return (
        <div id="main" className={`sidebar_row ${keys === click ? "active" : "main"}`}  >
            <h2 style={{ color: "black" }} className="leftsidebarows_title" onClick={() => onclick(keys, title)} webClick={onclick}>{title} </h2>
        </div >

    )
}

export default LeftSidebarRows