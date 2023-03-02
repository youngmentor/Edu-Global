import React from 'react'
import { useState } from 'react'
import "./Payment.css"
const Payment = () => {

  const [Payment, setPayment] = useState({
    // quantity: cart.length,
    studentName: "",
    phoneNumber: "",
    studentClass: "",
    studentEmail: "",
    regNumber: "",

  })

  const Field = [
    {
      id: 1,
      name: "studentName",
      type: "text",
      placeholder: "name",
      required: true,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "PayerNumber",
      required: true,
    }, {
      id: 3,
      name: "studentClass",
      type: "text",
      placeholder: "StudentClass",
      required: true,
    }, {
      id: 4,
      name: " studentEmail",
      type: "text",
      placeholder: "Student Email",
      required: true,
    }, {
      id: 5,
      name: "regNumber",
      type: "number",
      placeholder: "Phone Number",
      required: true,
    }
  ]
  return (
    <div className='StudentPayment_Main'>
      <div className='StudentPayment_Main_Wrap'>
        <form className='StudentPayment_Main_Form'>
          {Field.map((i) => (
            <label>
              <input
              className='Student_Payment_Input'
                placeholder={i.placeholder}
                type={i.type}
                name={i.name}
                key={i.id}
              />
            </label>
          ))}
        </form>
      </div>
    </div>
  )
}

export default Payment