import React from 'react'
import {Button} from './Button'
import './Contact.css'

function Contact() {
    return (
        <>
         <div className='contact-container'>
            <div className='contact-page'>
              <h1>Contact us</h1>
              <div className='contact-form'>
                <input placeholder='First name' className='forminfo'/><br/>
                <input placeholder='Last name' className='forminfo'/><br/>
                <input placeholder='Email-id' className='forminfo'/><br/>
                <input placeholder='Phone no' className='forminfo'/><br/>
                <textarea placeholder='Say something' className='formmsg'/><br/>
                <div className='contact-button'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Submit
                  </Button>
                </div>
              </div>
            </div>
          </div> 
        </>
    )
}

export default Contact
