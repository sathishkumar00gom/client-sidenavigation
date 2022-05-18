import React, { useState } from "react";
import "./CustomComponent.css";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

const CustomComponent = (props) => {

    // const [states, setStates] = useState(false);

    console.log("testProps", props)
    const handleClick = () => {
        console.log("halo");

    };

    // const handleClick2 = () => {
    //     console.log("halos");
    //     setStates(!states);
    // };
    console.log(props.data[0])
    return (
        <div>
            <div >
                {props.data.map((pro) => {
                    return (
                        <div className="sidebar_row">
                            <h2
                                style={{ color: "black", padding: "5px", display: "flex" }}
                                className="leftsidebarows_title"
                                key={props.keys}>{pro.title}</h2>
                        </div>
                    )

                })}
            </div>
        </div>)







}
export default CustomComponent;
