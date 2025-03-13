import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Map from "./Map"

const Contact = () => {
  const form = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()

    const formData = new FormData(form.current)

    // Additional validation check
    const userName = formData.get("user_name")
    const userEmail = formData.get("user_email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    if (!userName || !userEmail || !subject || !message) {
      toast.error("Please fill in all fields.")
      return
    }

    emailjs
      .sendForm(
        "service_6oae93r",
        "template_v2cbykx",
        form.current,
        "RkmShhb7Hrl2TPGmC"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          form.current.reset()
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      )
  }

  return (
    <>
      <div className="container">
        <div className="jlm_contact">
          <div className="jlm_title">
            <div className="title_flex">
              <div className="left">
                {/* <span>Contact</span> */}
                <h3>Get in Touch</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <Map />
          {/* MENU WRAP */}

          <div className="fields">
            <form
              className="contact_form"
              id="myForm"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="first">
                <ul>
                  <li>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  {/* END FIRST NAME */}

                  <li>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  {/* END EMAIL */}

                  <li>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </li>
                  {/* END EMAIL */}

                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </li>
                  {/* END SUBJECT MESSAGE */}
                </ul>
              </div>
              <div className="jlm_button">
                <button type="submit" className="ib-button">
                  Send Message
                </button>
              </div>
              {/* END SUBMIT BUTTON */}
            </form>
            {/* END FORM */}
          </div>
          {/* END FIELDS */}
        </div>
      </div>
      {/* END COTACT */}
    </>
  )
}

export default Contact
