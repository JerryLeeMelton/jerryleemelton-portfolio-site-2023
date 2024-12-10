import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Gallery } from "react-photoswipe-gallery"
import ReactTooltip from "react-tooltip"
import Modal from "react-modal"
import { CaseStudyViewer } from "./CaseStudyViewer"
import { useCaseStudy } from "../context/CaseStudyContext"

const Portfolio = () => {
  const [isOpen1, setOpen1] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)
  const [isOpen5, setOpen5] = useState(false)

  const { openCaseStudy, setOpenCaseStudy } = useCaseStudy()

  const toggleModalOne = () => {
    setOpen1(!isOpen1)
  }

  const toggleModalTwo = () => {
    setOpen2(!isOpen2)
  }

  const toggleModalThree = () => {
    setOpen3(!isOpen3)
  }

  const toggleModalFour = () => {
    setOpen4(!isOpen4)
  }

  const toggleModalFive = () => {
    setOpen5(!isOpen5)
  }

  if (openCaseStudy !== "") {
    return <CaseStudyViewer />
  }

  return (
    <>
      <Gallery>
        <div
          className="container"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="jlm_portfolio">
            <div className="jlm_title">
              <div className="title_flex">
                <div className="left">
                  {/* <span>Portfolio</span> */}
                  <h3>My Work</h3>
                </div>
              </div>
            </div>
            {/* END jlm_TITLE */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                </TabList>
                {/* END TABLIST */}
                <div className="list_wrapper">
                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* START PORTFOLIO PIECE - Polygon AI ==========================================================*/}
                      {/* <li data-aos="fade-right" data-aos-duration="1200"> */}
                      <li>
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/polygonui_thumb.webp"
                              alt="Polygon AI UI"
                              data-tip
                              data-for="polygon-ai-ui"
                              // onClick={() => setOpen1(true)}
                              onClick={() => setOpenCaseStudy("PolygonAI")}
                            />
                            <ReactTooltip
                              id="polygon-ai-ui"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Polygon AI User Interface</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE - Polygon AI ==========================================================*/}

                      {/* START PORTFOLIO PIECE - MidiMani ==========================================================*/}
                      {/* <li data-aos="fade-right" data-aos-duration="1200"> */}
                      <li>
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/midimani_thumb.webp"
                              alt="MIDI Mani - MIDI Manipulator Site"
                              data-tip
                              data-for="midi-mani-site"
                              onClick={() => setOpenCaseStudy("MidiMani")}
                            />
                            <ReactTooltip
                              id="midi-mani-site"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>MIDI Mani - MIDI Manipulator Site</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE - MidiMani ==========================================================*/}

                      {/* START PORTFOLIO PIECE - Photography Portfolio Site ==========================================================*/}
                      {/* <li data-aos="fade-right" data-aos-duration="1200"> */}
                      <li>
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/jlmphoto_thumb.webp"
                              alt="Photography Portoflio Web Site"
                              data-tip
                              data-for="jlm-photo-site"
                              onClick={() => setOpen4(true)}
                            />
                            <ReactTooltip
                              id="jlm-photo-site"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Photography Portoflio Website</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE - Photography Portfolio Site ==========================================================*/}

                      {/* START PORTFOLIO PIECE - Crypto Spotter ==========================================================*/}
                      {/* <li data-aos="fade-right" data-aos-duration="1200"> */}
                      <li>
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/cryptospotter.webp"
                              alt="Crypto Spotter Web Site"
                              data-tip
                              data-for="crypto-spotter-site"
                              onClick={() => setOpen3(true)}
                            />
                            <ReactTooltip
                              id="crypto-spotter-site"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Crypto Spotter Web Site</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE - Crypto Spotter ==========================================================*/}

                      {/* START PORTFOLIO PIECE - Symon Sez ==========================================================*/}
                      {/* <li data-aos="fade-right" data-aos-duration="1200"> */}
                      <li>
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/symon.webp"
                              alt="Symon Sez Web Game"
                              data-tip
                              data-for="symon-sez-game"
                              onClick={() => setOpen5(true)}
                            />
                            <ReactTooltip
                              id="symon-sez-game"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Symon Sez Web Game</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE - Symon Sez ==========================================================*/}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  {/* END CREATIVE PORTFOLIO GALLERY */}
                </div>
                {/* END LIST WRAPPER */}
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>

      {/* START PORTFOLIO DETAIL MODAL 1 ============================================================================ */}
      <Modal
        isOpen={isOpen1}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jlm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="tumb" /> */}
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/polygonui_detail_001.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Polygon AI User Interface</h3>
                {/* <span>Details</span> */}
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    When I landed my job at Rewire AI (then known as Rewire
                    Neuro), my main task was to use my experience as a graphic
                    designer to help redesign the user interface of their
                    flagship application Polygon AI (then known as Pipsqueak
                    Pro). I of course jumped at the chance to have such a huge
                    impact on the user experience of the relatively young
                    application.
                  </p>
                  <p>
                    It has been extremely rewarding to see each new feature and
                    redesign that I implemented transform the application into
                    something that I was more and more proud of each day.
                  </p>
                  <p>
                    UI features that I developed in my time working on Polygon
                    AI include a unified graphical style, redesigned tab-based
                    navigation, OS-specific custom title bars, in-app tutorials,
                    telemetry features, and switchable color themes (dark mode /
                    light mode) among other features.
                  </p>
                  <div className="jlm_button">
                    <button
                      className="ib-button"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open("https://rewire.ai/", "_blank")
                      }}
                    >
                      Visit Rewire AI
                    </button>
                  </div>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Rewire AI</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 2022 - Present</span>
                    </li>
                    <li>
                      <span className="first">Technologies</span>
                      <span>React, Electron, react-joyride, aptabase</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        {/* <img src="img/thumbs/4-2.jpg" alt="thumb" /> */}
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/portfolio/polygonui_detail_002.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        {/* <img src="img/thumbs/4-2.jpg" alt="thumb" /> */}
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/portfolio/polygonui_detail_003.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        {/* <img src="img/thumbs/4-2.jpg" alt="thumb" /> */}
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/portfolio/polygonui_detail_004.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAIL 1 ======================================================================== */}

      {/* START PORTFOLIO DETAIL MODAL 2 ============================================================================ */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jlm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="tumb" /> */}
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/polygon_logo_detail_001.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Polygon AI Logo Design</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    In early 2023, Rewire began talks about rebranding their
                    flagship application Pipsqueak Pro. I was super happy to
                    flex my graphic design muscles and help refine some of the
                    rough logo concepts that the team had come up with.
                  </p>
                  <p>
                    After some internal debate and revisions, we decided on the
                    logo concept that I had designed. I feel that the angular,
                    futuristic features of the logo communicate the
                    forward-thinking nature of Rewire and their application very
                    well.
                  </p>
                  <div className="jlm_button">
                    <button
                      className="ib-button"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open("https://rewire.ai/", "_blank")
                      }}
                    >
                      Visit Rewire AI
                    </button>
                  </div>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Rewire AI</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAIL 2 ======================================================================== */}

      {/* START PORTFOLIO DETAIL MODAL 3 ============================================================================ */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jlm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="tumb" /> */}
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/cryptospotter_detail_001.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Crypto Spotter Web Site</h3>
                {/* <span>Details</span> */}
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    As a dabbler in cryptocurrency investing, I thought it would
                    be useful and fun to build a website that was a simple, no
                    nonsense page with all of the info that I would care to
                    check regularly and none of the fluff.
                  </p>
                  <p>
                    Designed to be as readable at a glance as possible, the site
                    features a very minimalist, responsive design and a
                    pleasingly soft, subtly animated gradient background.
                  </p>
                  <div className="jlm_button">
                    <button
                      className="ib-button"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          "https://crypto.jerryleemelton.com/",
                          "_blank"
                        )
                      }}
                    >
                      Launch Site
                    </button>
                    <button
                      style={{ marginLeft: "1rem" }}
                      className="ib-button"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          "https://github.com/JerryLeeMelton/CryptoSpotter-CryptoDashboard",
                          "_blank"
                        )
                      }}
                    >
                      Github Repo
                    </button>
                  </div>
                </div>
                <div className="detailbox">
                  <ul>
                    {/* <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li> */}
                    <li>
                      <span className="first">Date</span>
                      <span>January 2022</span>
                    </li>
                    <li>
                      <span className="first">Technologies</span>
                      <span>Express, EJS, coingecko-api, node-fetch</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAIL 3 ======================================================================== */}

      {/* START PORTFOLIO DETAIL MODAL 4 ============================================================================ */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jlm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />z */}
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/jlmphoto_detail_001.webp",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Photography Portfolio Website</h3>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    After years of using Wordpress for my own personal
                    photography portfolio website and dealing with the
                    frustrations that come along with that, I decided to create
                    my own portfolio site from the ground up using Express.
                  </p>
                  <p>
                    I’ve always liked the more minimal approach to a visual arts
                    portfolio site like the one I have here. I believe it allows
                    the viewer to truly focus on what is being presented and it
                    allows the work to speak for itself.
                  </p>
                  <div className="jlm_button">
                    <button
                      className="ib-button"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          "https://photography.jerryleemelton.com/",
                          "_blank"
                        )
                      }}
                    >
                      Launch Site
                    </button>
                    <button
                      style={{ marginLeft: "1rem" }}
                      className="ib-button"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          "https://github.com/JerryLeeMelton/JerryLeeMelton-PhotographyPortfolio",
                          "_blank"
                        )
                      }}
                    >
                      Github Repo
                    </button>
                  </div>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Date</span>
                      <span>March 2022</span>
                    </li>
                    <li>
                      <span className="first">Technologies</span>
                      <span>Express, EJS, nodemailer</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/portfolio/jlmphoto_detail_002.webp",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  {/* <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage:
                              "url(assets/img/portfolio/jlmphoto_detail_003.webp)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li> */}
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAIL 4 ======================================================================== */}

      {/* START PORTFOLIO DETAIL MODAL 5 ============================================================================ */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalFive}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jlm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFive}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                {/* <img src="assets/img/thumbs/4-3.jpg" alt="tumb" /> */}
                <div
                  className="main"
                  style={{
                    backgroundImage:
                      "url(assets/img/portfolio/symon_detail_001.webp)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Symon Sez Web Game</h3>
                {/* <span>Details</span> */}
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    One year for Christmas my mom and dad gave my brother and I
                    a Simon game that soon became a popular fixture in the
                    family game closet. The game has since been lost to time and
                    the ravages of my folks’ garage, so I wanted to create a web
                    version of the game that could live on and carry the fun
                    memories forward.
                  </p>
                  <p>
                    For my web version, I wanted to replicate, as closely as I
                    could, the colors and sounds from the game from my
                    childhood. I used a synthesizer to create the sounds with
                    the exact tones from the original game and I sampled colors
                    from photos online of the original transparent Simon that I
                    had back in the day.
                  </p>
                  <div className="jlm_button">
                    <button
                      className="ib-button"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          "https://symon.jerryleemelton.com/",
                          "_blank"
                        )
                      }}
                    >
                      Launch Site
                    </button>

                    <button
                      style={{ marginLeft: "1rem" }}
                      className="ib-button"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(
                          "https://github.com/JerryLeeMelton/symon-sez-game",
                          "_blank"
                        )
                      }}
                    >
                      Github Repo
                    </button>
                  </div>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Date</span>
                      <span>February 2022</span>
                    </li>
                    <li>
                      <span className="first">Technologies</span>
                      <span>Express, EJS, KUTE.js</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAIL 5 ======================================================================== */}
    </>
  )
}

export default Portfolio
