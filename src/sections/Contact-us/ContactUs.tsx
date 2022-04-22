import React, { useState } from "react"
import SectionLayout from "../../components/SectionLayout";
import TextField from '../../components/TextField/TextField';
import TextArea from '../../components/TextArea/TextArea';
import Toast from '../../components/Toast/Toast';
import './Contact.scss';

// @ts-ignore
import Contact from '../../images/contact.svg';

const ContactUs = () => {
  const URL = "https://h5raw57o51.execute-api.us-east-1.amazonaws.com/prod/contact-us"
  const initialState = {
    name: "",
    email: "",
    message: ""
  }
  const [formState, setFormState] = useState(initialState)
  const [showToast, setShowToast] = useState(false)
  const [variant, setVariant] = useState("error")
  const [message, setMessage] = useState("")

  const onFormStateChange = (name:string, value:string) => {
    setFormState((state) => {
      return {
        ...state,
        [name]: value
      }
    })
  }

  const onSubmit = async () => {
    const error = validateData(formState)
    if (error) {
      setMessage(error)
      setShowToast(true)
      setVariant("error")
    } else {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          mode: "cors",
          body: JSON.stringify(formState)
        })
        let res = await response.json()
        if (res.success) {
          setMessage("We got your details. We will get back to you soon")
          setShowToast(true)
          setVariant("success")
          setFormState(initialState)
        }
      } catch (e:any) {
        setMessage(e.message)
        setShowToast(true)
        setVariant("error")
      }

    }

  }

  const validateData = (data:any) => {
    let error
    const emailRegex = new RegExp("^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$", "g")
    if (!emailRegex.test(data.email)) {
      error = "Invalid email address!"
    } else if (!data.name) {
      error = "Name is required!"
    } else if (!data.message) {
      error = "Message is required!"
    }
    return error
  }

  return (
      <SectionLayout title="We'd love to hear from you">
        <h4 className='text-white'>Contact us</h4>
          <div className='d-flex flex-column-reverse flex-md-row justify-content-between'>
            <div className='w-100 me-md-5'>
              <TextField
                  name='name'
                  id='name'
                  value={formState.name}
                  label='Full name'
                  placeholder='Your full name'
                  onChange={onFormStateChange}
                  type='text'/>
              <TextField
                  name='email'
                  id='email'
                  value={formState.email}
                  label='Email'
                  placeholder='email@domain.com'
                  onChange={onFormStateChange}
                  type='email'/>
              <TextArea
                  name='message'
                  id='message'
                  value={formState.message}
                  label='Message'
                  placeholder='Your message'
                  onChange={onFormStateChange}/>
              <button className='w-100 text-white btn send-message-btn'>SEND MESSAGE</button>

            </div>
              <img className='img-fluid' src={Contact} alt='Contact'/>
          </div>
          {
            showToast && <Toast message={message} variant={variant} onClose={() => {
              setShowToast(false)
            }}/>
          }
      </SectionLayout>

  )
}

export default ContactUs
