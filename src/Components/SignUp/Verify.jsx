import React from 'react'
// import '/SignUp.css'
const Verify = () => {

    const style ={
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:"column",
        alignItem:'center',
        justifyContent:"center",
        backgroundColor:'grey'
    }

    const stylebutton ={
        height:'50px',
        display:'flex',
        paddingTop:10,
        flexDirection:"column",
        alignItem:'center',
        justifyContent:"center"
    }
  return (
    <div style={style} className='verify'>
        <button style={stylebutton} >click here to Verify</button>
    </div>
  )
}

export default Verify