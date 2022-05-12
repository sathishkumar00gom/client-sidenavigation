import React from "react";
import "./CustomComponent.css"


const CustomComponent = (props) => {

    return (

        <div >
            <div className='sidebar_row'>
                <h2 style={{ color: "black" }} className='leftsidebarows_title' onClick={props.send}>{props.titles}</h2>

            </div>
            {props.auto &&
                <div>  <div className='sidebar_row'>
                    <h2 style={{ color: "black" }} className='leftsidebarows_title' onClick={props.send}></h2>

                </div></div>

            }

        </div>
    )
}
export default CustomComponent


// onClick={handleClick} 