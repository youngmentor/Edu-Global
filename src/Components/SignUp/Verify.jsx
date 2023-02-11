import React from 'react'
// import '/SignUp.css'
import { useParams } from 'react-router-dom';
const Verify = () => {
const {id}= useParams()
console.log(id)

    const handleSubmit = async (event) => {
        try{
            event.preventDefault();
        const response = await axios.post(`https://eduglobal.onrender.com/api/userVerify/${id}`)
        console.log(response)
        }catch (error) {
            console.log("error")
          }
    }



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
        <button onClick={()=>{ handleSubmit()}} style={stylebutton} >click here to Verify</button>
    </div>
  )
}

export default Verify