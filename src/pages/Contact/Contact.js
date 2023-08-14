import React from 'react'
import { useForm } from '@formspree/react';
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { ContactButton } from '../../components/UI/ButtonGroup';
import './contact.scss'

function Contact(props) {
  const [state, handleSubmit] = useForm("xyyarlde");
  
  const handleContactSubmit = (e) => {
    e.preventDefault()                //cka eshte?
    console.log('First name: ', e.target.FirstName.value)   //what does e.target do
    console.log('Last name: ', e.target.LastName.value)
    console.log('Email: ', e.target.Email.value)
    console.log('Phone: ', e.target.Phone.value)
    console.log('Message: ', e.target.Message.value)

    // const response = {};
    // response['FirstName'] =  e.target.FirstName.value;
    // response['LastName'] = e.target.LastName.value;
    // response['LastName'] = e.target.Email.value;
    // response['phone'] = e.target.Phone.value;
    // response['message'] = e.target.Message.value;
    // console.log(response)
  }

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
          <input type='text' name='FirstName' id='FirstName' placeholder='First name *' required />
          <input type='text' name='LastName' id='LastName' placeholder='Last name *' required />
          <input type='email' name='Email' id='Email' placeholder='Email address *' required />
          <input type='tel' name='Phone' id='Phone' placeholder='Phone number' />
          <textarea name='Message' id='Message' placeholder='How can we help you? *' required></textarea>
          <div className='contact-buttons'>
            <ContactButton type={"reset"} label={"Reset"} />
            <ContactButton type={"submit"} label={"Send"} disabled={state.submitting} />
          </div>
          {props.submitNote}
        </form>
      </div>
      
    </section>
  )
}

export default Contact
