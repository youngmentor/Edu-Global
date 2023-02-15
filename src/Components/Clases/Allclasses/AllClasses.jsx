import React from 'react'
import "./AllClasses.css"
import { useNavigate } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa";
const AllClasses = () => {
  const navigate = useNavigate()
  return (
    <div className='AllclassesMain' >
         <div className='AllClassCardHolder'>
         <div className='AllClassCard'>
                  <div className='AllClassCardWrap'>
                  <div className='AllClassCardDetails'>
                        <h4>Jss1</h4>
                        <h2>0</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AllClassGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
                <div className='AllClassCard'>
                <div className='AllClassCardWrap'>
                  <div className='AllClassCardDetails'>
                        <h4>Jss2</h4>
                        <h2>0</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AllClassGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
                <div className='AllClassCard'>
                <div className='AllClassCardWrap'>
                  <div className='AllClassCardDetails'>
                        <h4>Jss3</h4>
                        <h2>0</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AllClassGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
                <div className='AllClassCard'>
                <div className='AllClassCardWrap'>
                  <div className='AllClassCardDetails'>
                        <h4>ss1</h4>
                        <h2>0</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AllClassGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
                <div className='AllClassCard'>
                <div className='AllClassCardWrap'>
                  <div className='AllClassCardDetails'>
                        <h4>ss2</h4>
                        <h2>0</h2>
                        <h4>Students</h4>
                    </div>
                    <div className='AllClassGraduationCap'>
                      <FaGraduationCap style={{ width: "50px", height: "50px" }}  />  
                    </div>  
                  </div>
                </div>
                <div className='AllClassCard' onClick={() => { navigate("/admin/clases/addclasses") }}>
                    <h1>+</h1>
                    <h1>Add New</h1>
                </div>
            </div>
    </div>
  )
}

export default AllClasses