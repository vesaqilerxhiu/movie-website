import React, { useState } from 'react'
import { useForm } from '@formspree/react';
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { ContactButton } from '../../components/UI/ButtonGroup';
import './contact.scss'

function Contact(props) {
  // default prej FormSpree:
  const [state, handleSubmit] = useForm("xaygzoaj");

  // The send button works because it's part of a form submission handled by the handleSubmit function provided by useForm from @formspree/react. However, the reset button (type="reset") doesn't automatically reset the form fields like it should because you haven't provided any logic to handle the reset action. Unlike the send button, which has built-in behavior when used within a form, the reset button requires custom JavaScript logic to reset the form fields.

  const handleReset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phone, setPhone ] = useState('')
  const [ message, setMessage ] = useState('')

  // const handleContactSubmit = (e) => {
  //   e.preventDefault() 
  //   const formData = { firstName, lastName, email, phone, message }             
  //   console.log(`Form data: ${formData}`)

  //   fetch('http://xxxxx..', {
  //     method: 'POST',
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formData)
  //   }).then(() => {
  //     console.log("New message recieved")
  //   })
  // }

  // default prej FormSpree:
  if (state.succeeded) {
    return (
      <Contact submitNote = {
              <small className='contact-submit-note'>
                  Thank you for reaching out to us!<br />
                  We have received your email and will reply to you as soon as possible.
              </small>
              } />
    );
  }

  return (
    <section className='contact-container'>

      <div className='contact-help'>
        <h1>Cineverse Support</h1>
        <h4>How can we help you?</h4>
        <p>At CINEVERSE, our dedicated team is committed to providing you with unparalleled support and assistance. We are here to address your questions, offer guidance, and listen to your valuable suggestions.
        </p>
        <p>We strive to ensure that your experience on our platform is seamless and enjoyable. Simply reach out to us, and we'll be delighted to lend a helping hand.</p>
        <div className='contact-info'>
          <span><MdEmail /></span>
          <p>info@cineverse.com</p>
          <span><AiFillPhone /></span>
          <p>555-123-4567</p>
          <span><MdLocationOn /></span>
          <p>123 Fake Street, Anytown, USA</p>
        </div>
      </div>

      <div className='contact-form'>
        <h1>Get in touch</h1>
        <form onSubmit={handleSubmit}>
          <input 
              type='text' 
              name='FirstName' 
              id='FirstName' 
              placeholder='First name *' 
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
          />
          <input 
              type='text' 
              name='LastName' 
              id='LastName'
              placeholder='Last name *' 
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
          />
          <input 
              type='email' 
              name='Email' 
              id='Email' 
              placeholder='Email address *' 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input 
              type='tel' 
              name='Phone' 
              id='Phone' 
              placeholder='Phone number' 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
          />
          <textarea 
              name='Message' 
              id='Message' 
              placeholder='How can we help you? *' 
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
          >
          </textarea>

          <div className='contact-buttons'>
            <ContactButton type={"reset"} label={"Reset"} onClick={handleReset} />
            <ContactButton type={"submit"} label={"Send"} disabled={state.submitting} />
          </div>

          {props.submitNote}

        </form>
      </div>
      
    </section>
  )
}

export default Contact
