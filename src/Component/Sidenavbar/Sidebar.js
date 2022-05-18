import React, { useState } from 'react';
import LeftSidebarRows from "./Leftsidebarrows/Leftsidebarrows"
import './Sidenavbar.css';
import CustomComponent from './CustomComponent/CustomComponent';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const [title, setTitle] = useState("")
    console.log("tit", title)

    const array = [{
        title: "Home",
        keys: "1"
    },
    {
        title: "Explore",
        keys: "2"
    },
    {
        title: "Subscriptions",
        keys: "3"
    },
    {
        title: "Library",
        keys: "4"
    },
    {
        title: "Show More",
        keys: "5",
        Children:
            [{
                title: "small"
            },
            {
                title: "medium",

            },
            {
                title: "large",

                NestedChildren: [{
                    title: "Extra Small"


                },
                {
                    title: "Extra Medium"


                },
                {
                    title: "Extra Large"


                }]
            }],


    },
    {
        title: "History",
        keys: "6"
    },
    {
        title: "Your Videos",
        keys: "7"
    },
    {
        title: "Watch Later",
        keys: "8"
    },
    {
        title: "Liked Videos",
        keys: "9"
    },
    {
        title: "extra",
        keys: "10"
    },
    ]





    return (
        <div className='sidebar'>
            {array.map((item) => {
                return (
                    <>
                        <LeftSidebarRows title={item.title} keys={item.keys} onClick={() => setTitle(item.title)} />

                        {item.Children && item.Children?.length > 0 && title === "Show More" && <CustomComponent data={item.Children} />}






                    </>
                )
            })}
        </div>

    )


}

export default Sidebar




//   if (item.title === "Show More") {
//     return (
//         <h2 onClick={() => onclick(keys)}>title = {item.title}</h2>
//         {
//         Children.map((items) => {
//             return (
//                 <>
//                     <h2 onClick={() => onCLick(keys)}>title = {items.title}</h2>
//                     keys = {items.keys}
//                 </>
//             )
//         })
//     }
//     )
// }
// )

{/* <CustomComponent /> */ }