import React, { useState } from "react"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Map from "./Map"

const SERVICE_ID = "service_6oae93r"
const TEMPLATE_ID = "template_v2cbykx"
const PUBLIC_KEY = "eCyaTfLxpt0HIeH3a"

const Contact = () => {
  const [fromName, setFromName] = useState("")
  const [replyTo, setReplyTo] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)

  // Honeypot to prevent bots
  const [company, setCompany] = useState("") // must remain empty

  const validate = () => {
    const name = fromName.trim()
    const email = replyTo.trim()
    const subj = subject.trim()
    const msg = message.trim()

    if (!name || !email || !subj || !msg) {
      toast.error("Please fill in all fields.")
      return false
    }

    // very light email check
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      toast.error("Please enter a valid email address.")
      return false
    }

    // Honeypot: if filled, treat as bot
    if (company.trim() !== "") {
      // silently succeed to avoid tipping off bots
      toast.success("Message Sent Successfully!", { autoClose: 1200 })
      return false
    }

    // Optional: minimum message length
    // if (msg.length < 5) {
    //   toast.error("Message is too short.")
    //   return false
    // }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)
    try {
      const payload = {
        from_name: fromName.trim(),
        reply_to: replyTo.trim(),
        subject: subject.trim(),
        message: message.trim(),
        submitted_at: new Date().toISOString(),
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      }

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, PUBLIC_KEY)
      toast.success("Message Sent Successfully!", { autoClose: 2000 })
      setFromName("")
      setReplyTo("")
      setSubject("")
      setMessage("")
      setCompany("") // honeypot
    } catch (err) {
      toast.error("Oops—message not sent. Please try again.")
      // console.log("ERROR: ", err)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <div className="container">
        <div className="jlm_contact">
          <div className="jlm_title">
            <div className="title_flex">
              <div className="left">
                <h3>Get in Touch</h3>
              </div>
            </div>
          </div>

          <Map />

          <div className="fields">
            <form
              className="contact_form"
              id="myForm"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Honeypot field */}
              <input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-5000px",
                  opacity: 0,
                  height: 0,
                  width: 0,
                }}
              />

              <div className="first">
                <ul>
                  <li>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Name"
                      value={fromName}
                      onChange={(e) => setFromName(e.target.value)}
                      required
                      autoComplete="name"
                    />
                  </li>

                  <li>
                    <input
                      type="email"
                      name="reply_to"
                      placeholder="Email"
                      value={replyTo}
                      onChange={(e) => setReplyTo(e.target.value)}
                      required
                      autoComplete="email"
                      inputMode="email"
                    />
                  </li>

                  <li>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </li>

                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={6}
                    />
                  </li>
                </ul>
              </div>

              <div className="jlm_button">
                <button type="submit" className="ib-button" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
