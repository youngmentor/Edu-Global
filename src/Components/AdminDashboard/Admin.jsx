import React from 'react'
import './Admin.css'
import AdminLeft from './AdminLeft'
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { RiPencilRulerLine } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
// import { IconName } from "react-icons/io";

const Admin = () => {
    const Sidebar = [
        {
            id: 1,
            title: "Dashboard",
            icon1: < AiFillHome />,
            // icon2: <IoIosArrowForward />,
            // value: false,
            // icon3: <SlArrowDown />,
        },
        , {
            id: 2,
            title: "Classes",
            text1: "All classes",
            text2: "New Classes",
            text2: "Edit or Delete",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            value: false,
            icon3: <SlArrowDown />,
        }
        , {
            id: 3,
            title: "Subject",
            text1: "Classes with subject",
            text2: "Add new Subject",
            icon1: < RiPencilRulerLine />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
        }
        , {
            id: 4,
            title: "Students",
            text1: "Add new students",
            text2: "Update students",
            text3: "Delete Student",
            icon1: < FaUserFriends />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
        },
        {
            id: 5,
            title: "Teacher",
            text1: "Add new Teacher",
            text2: "UpdateTeacher",
            text3: "Delete Teacher",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
        },
        , {
            id: 6,
            title: "Attendance",
            text1: "Mark Student Attendance",
            text2: "Mark Teacher Attendance",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
        }
        , {
            id: 7,
            title: "TimeTable",
            text1: "View TimeTable",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
        }
        , {
            id: 8,
            title: "Fees",
            text1: "Pay Fees",
            icon1: < AiFillHome />,
            icon2: <IoIosArrowForward />,
            icon3: <SlArrowDown />,
        }
    ]

    return (
        <div className='AdminMain'>
            <div className='AdminLeftWrapper'>
                <div className='AdminLeft'>
                    {Sidebar.map((i) => (
                        <AdminLeft key={i.id}{...i} />
                    ))}
                </div>
                <div className='AdminRight'>
                    <div className='AdminwelcomeMssg'>
                        <h3>Welcome to admin dashboard</h3>
                    </div>
                    <div className='AdminCardHolder'>
                        <div className='AdminCard'>
                            <h1>Cards</h1>
                        </div>
                        <div className='AdminCard'>
                            <h1>Cards</h1>
                        </div>
                        <div className='AdminCard'>
                            <h1>Cards</h1>
                        </div>
                        <div className='AdminCard'>
                            <h1>Cards</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;