import React from 'react'
import './Admin.css'
import AdminLeft from './AdminLeft'
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiPencilRulerLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
// import { IconName } from "react-icons/io";

const Admin = () => {
    const Sidebar = [
        {
            id: 1,
            title: "Dashboard",
            text1: "profile",
            text2: "setting",
            text3: "Log out",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
        },
        , {
            id: 2,
            title: "Employee",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
        }
        , {
            id: 3,
            title: "Classes",
            icon1: < RiPencilRulerLine/>,
            icon2: <IoIosArrowForward />,
        }
        , {
            id: 4,
            title: "Students",
            icon1: < FaUserFriends/>,
            icon2: <IoIosArrowForward />,
        },
        {
            id: 5,
            title: "Attendance",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
        },
        , {
            id: 6,
            title: "Timetable",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
        }
        , {
            id: 7,
            title: "Fee",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
        }
        , {
            id: 8,
            title: "Dashboard",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
        }
    ]

    return (
        <div className='AdminMain'>
            {Sidebar.map((i) => (
                <AdminLeft key={i.id}{...i} />
            ))},
            <div>
                <h3>Welcome to admin dashboard</h3>
            </div>
        </div>
    )
}

export default Admin;