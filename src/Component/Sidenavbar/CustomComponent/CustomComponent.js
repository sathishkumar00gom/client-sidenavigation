import React, { useState } from "react";
import "./CustomComponent.css";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";

const CustomComponent = (props) => {
    const [state, setState] = useState(false);
    const [states, setStates] = useState(false);


    const handleClick = () => {
        console.log("halo");
        setState(!state);
    };

    const handleClick2 = () => {
        console.log("halos");
        setStates(!states);
    };

    return (
        <div>
            <div style={{ display: "flex" }}>
                <div className="sidebar_row">
                    <h2
                        style={{ color: "black", padding: "5px", display: "flex" }}
                        className="leftsidebarows_title"
                        onClick={handleClick}
                    >
                        {props.titles}
                        <div>
                            <IoIcons.IoIosArrowDropdownCircle />
                        </div>
                    </h2>
                </div>
            </div>

            {state && (
                <>
                    <div style={{ padding: "10px" }}>
                        <div style={{ display: "flex" }}>
                            <div className="sidebar_rows">
                                <h2
                                    style={{ color: "black", padding: "5px", display: "flex" }}
                                    className="leftsidebarows_title"

                                >
                                    Small
                                </h2>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className="sidebar_rows">
                                <h2
                                    style={{ color: "black", padding: "5px", display: "flex" }}
                                    className="leftsidebarows_title"
                                >
                                    Medium
                                </h2>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div className="sidebar_rows">
                                <h2
                                    style={{ color: "black", padding: "5px", display: "flex" }}
                                    className="leftsidebarows_title"
                                    onClick={handleClick2}
                                >

                                    Large
                                    <div>
                                        <IoIcons.IoIosArrowDropdownCircle />
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {states && (
                <>
                    <div style={{ padding: "20px" }}>
                        <Link to='/Extra Small'>


                            <div style={{ display: "flex" }}>
                                <div className="sidebar_rows">
                                    <h2
                                        style={{ color: "black", padding: "5px", display: "flex" }}
                                        className="leftsidebarows_title"
                                    >
                                        Extra Small
                                    </h2>
                                </div>
                            </div>

                        </Link>
                        <Link to='/Extra Medium'>
                            <div style={{ display: "flex" }}>
                                <div className="sidebar_rows">
                                    <h2
                                        style={{ color: "black", padding: "5px", display: "flex" }}
                                        className="leftsidebarows_title"
                                    >
                                        Extra Medium
                                    </h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/Extra Large'>
                            <div style={{ display: "flex" }}>
                                <div className="sidebar_rows">
                                    <h2
                                        style={{ color: "black", padding: "5px", display: "flex" }}
                                        className="leftsidebarows_title"
                                    >
                                        Extra Large
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                </>
            )
            }
        </div >
    );
};
export default CustomComponent;
