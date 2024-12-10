import * as React from "react"

export const MidiMani = (props) => {
  const setOpenCaseStudy = props.setOpenCaseStudy

  const backButtonClick = () => {
    setOpenCaseStudy("")
  }

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1200"
      data-aos-delay="100"
      className="container"
    >
      <div className="jlm_portfolio">
        <div className="jlm_title">
          <div className="title_flex">
            <div className="left">
              <h3 className="marg-bottom-one-and-half">
                MIDI Mani - Online MIDI Manipulator
              </h3>
              <img
                src="assets/img/casestudies/midimani/MIDIMANI_Portfolio_HeroImage_cropped.webp"
                alt="MIDI Mani"
                className="marg-bottom-one-and-half"
              />
              <p className="marg-bottom-one-and-half">
                <span
                  className="text-bold"
                  style={{
                    backgroundColor: "transparent",
                    marginBottom: "0",
                    marginRight: "0.5rem",
                    padding: "0",
                  }}
                >
                  Challenge:
                </span>
                {"  "}
                Randomizing MIDI timing and velocity to create a "humanized"
                feel can be a cumbersome process in most digital audio
                workstations (DAWs).
              </p>
              {/* <h6>Solution: </h6> */}
              <p className="marg-bottom-three">
                <span
                  className="text-bold background-transparent"
                  style={{
                    backgroundColor: "transparent",
                    marginBottom: "0",
                    marginRight: "0.5rem",
                    padding: "0",
                  }}
                >
                  Solution:
                </span>
                {"  "}I developed a clean, minimalist web app to make humanizing
                MIDI files quick, intuitive, and accessible.
              </p>

              <h4 className="marg-bottom-half">Problems with "Perfect" MIDI</h4>
              <p className="marg-bottom-one-and-half">
                MIDI (Musical Instrument Digital Interface) is a digital
                protocol that conveys information about a musical
                performance—notes played, their timing, and velocity (how hard
                they’re played).
              </p>
              <p className="marg-bottom-one-and-half">
                When creating or using MIDI data, notes are often perfectly
                aligned with the tempo's grid (e.g., quarter or eighth notes)
                and assigned uniform velocity values. While precise, this can
                result in sterile, lifeless music. Humanizing the data by adding
                subtle variations to timing and velocity creates a more natural,
                expressive sound.
              </p>
              <img
                src="assets/img/casestudies/midimani/MIDIMANI_Portfolio_PianoRoll.webp"
                alt="Pipsqueak Pro Main Screen"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                Piano roll in Ableton Live showing grid aligned MIDI
              </div>

              <p className="marg-bottom-one-and-half">
                However, many DAWs make this process unintuitive. For example,
                in Ableton Live—the DAW I use—randomizing MIDI requires
                combining two plugins and recording in real time to achieve
                consistent results.
              </p>

              <h4 className="marg-bottom-one-and-half">A Simple Solution</h4>
              <img
                src="assets/img/casestudies/midimani/MIDIMANI_Portfolio_MainImage.webp"
                alt="Pipsqueak Pro Main Screen"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                MIDI Mani UI upon loading
              </div>

              <p className="marg-bottom-one-and-half">
                I wanted this project to be as frictionless as possible. The
                app's UX needed to simplify MIDI randomization significantly to
                stand out as a better alternative to existing methods.
              </p>
              <p className="marg-bottom-three">
                The app’s minimalist design reflects its straightforward
                functionality. I included only essential UI elements, ensuring
                clarity and simplicity. Key UI components render only after a
                MIDI file is uploaded, which keeps the experience focused and
                intuitive. I'm proud of how these design choices support a
                seamless and fast user experience.
              </p>
              <img
                src="assets/img/casestudies/midimani/MIDIMANI_Portfolio_SecondScreen.webp"
                alt="Pipsqueak Pro Main Screen"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                MIDI Mani interface after uploading a MIDI file
              </div>

              <h4 className="marg-bottom-one-and-half">The Looking Forward</h4>
              <p className="marg-bottom-one-and-half">
                While the app achieves its core goal, there’s room to expand its
                capabilities. Planned features include:
              </p>
              <ul className="marg-bottom-one-and-half case-study-list">
                <li>Transposing notes to different keys.</li>
                <li>Splitting tracks.</li>
                <li>Quantizing notes.</li>
                <li>
                  Introducing a piano roll interface to visualize MIDI data.
                </li>
              </ul>

              <p className="marg-bottom-one-and-half">
                As a longtime musician, working with MIDI has always fascinated
                me. Building this project has been incredibly rewarding—not only
                as a developer but also as a creator who now has a tool that
                I’ll use for years to come.
              </p>

              <div className="jlm_button">
                <button
                  className="ib-button"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(
                      "https://midimani.jerryleemelton.com/",
                      "_blank"
                    )
                  }}
                >
                  Launch Site
                </button>
                <button
                  className="ib-button"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(
                      "https://github.com/JerryLeeMelton/midi-mani",
                      "_blank"
                    )
                  }}
                >
                  Github Repo
                </button>
                <button className="ib-button" onClick={backButtonClick}>
                  Back To Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
