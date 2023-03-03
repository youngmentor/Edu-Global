import React from 'react'
import { useState } from 'react'
import "./Payment.css"
import { useSelector } from 'react-redux'
import PaymentApi from './PaymentApi'
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
      placeholder: "Student Name",
      required: true,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Payer Number",
      required: true,
    }, {
      id: 5,
      name: "regNumber",
      type: "number",
      placeholder: "Phone Number",
      required: true,
    }
  ]
  const allclass = useSelector((state) => state.Commerce.allclass)
  function PaymentApi (amount) {
    console.log("clicked")
    // let key = `key${Math.random()}`
    window.korapay.initialize({
      key: "pk_test_MFDuWfiVWvpnJ35q6UCrTFnjyMnmdPBJJcSZHSKd",
      refrence: `${refVal}`,
      amount: {totalAmount},
      currency: "NGN",
      customer: {
        name: "John Doe",
        email: "john@doe.com",
      },
      notification_url: "https://example.com/webhook"
    });;
  }
  return (
    <div className='StudentPayment_Main'>
      <div className='StudentPayment_Main_Wrap'>
        <form className='StudentPayment_Main_Form'>
          {Field.map((i) => (
            <label key={i.id}>
              <input
              className='Student_Payment_Input'
                placeholder={i.placeholder}
                type={i.type}
                name={i.name}
                
              />
            </label>
          ))}
          <select className="Student_Payment_Input" onChange={(e) => { setPayment({ ...Payment, studentClass: e.target.value }); }}>
          {allclass.map((i) => (
              <option onClick={() => { console.log(i._id) }} placeholder="Select Class" value={i.nameOfClass}> Class- {i.nameOfClass} {i.classBranch}</option>
            ))
            }
          </select>
          <select className="Student_Payment_Input" onChange={(e) => { setPayment({ ...Payment, studentClass: e.target.value }); }}>
          {allclass.map((i) => (
              <option onClick={() => { console.log(i._id) }} placeholder="Select Class" value={i.monthlyTutionFees}> Amount- {i.nameOfClass}{i.classBranch} - {i.monthlyTutionFees}</option>
            ))
            }
          </select>
          <button type="submit" className='Payment_Button'  onClick={PaymentApi}> Proceed To Payment</button>
        </form>
      </div>
    </div>
  )
}

export default Payment