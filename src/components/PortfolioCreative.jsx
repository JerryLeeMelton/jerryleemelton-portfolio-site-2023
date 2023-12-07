import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Gallery, Item } from "react-photoswipe-gallery"
import ReactTooltip from "react-tooltip"
import ModalVideo from "react-modal-video"
import Modal from "react-modal"
import Social from "./Social"

const Portfolio = () => {
  // for popup video for youtube
  const [isOpen, setOpen] = useState(false)

  // popup video for vimeo
  const [isOpen2, setOpen2] = useState(false)

  // for modal details
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)

  // for modal details method
  function toggleModalThree() {
    setIsOpen3(!isOpen3)
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4)
  }

  return (
    <>
      <Gallery>
        <div className="container">
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
                      {/* START PORTFOLIO PIECE 1 ==========================================================*/}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Polygon AI UI"
                              data-tip
                              data-for="polygon-ai-ui"
                              onClick={() => setOpen2(true)}
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
                      {/* END PORTFOLIO PIECE 1 ==========================================================*/}

                      {/* START PORTFOLIO PIECE 2 ==========================================================*/}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Polygon AI UI"
                              data-tip
                              data-for="polygon-ai-logo"
                              onClick={() => setOpen2(true)}
                            />
                            <ReactTooltip
                              id="polygon-ai-logo"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Polygon AI Logo Design</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE 2 ==========================================================*/}

                      {/* START PORTFOLIO PIECE 3 ==========================================================*/}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Crypto Spotter Web Site"
                              data-tip
                              data-for="crypto-spotter-site"
                              onClick={() => setOpen2(true)}
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
                      {/* END PORTFOLIO PIECE 3 ==========================================================*/}

                      {/* START PORTFOLIO PIECE 4 ==========================================================*/}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Jerry Lee Melton - Photography Portoflio Website"
                              data-tip
                              data-for="jlm-photo-site"
                              onClick={() => setOpen2(true)}
                            />
                            <ReactTooltip
                              id="jlm-photo-site"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>
                                  Jerry Lee Melton - Photography Portoflio
                                  Website
                                </h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE 4 ==========================================================*/}

                      {/* START PORTFOLIO PIECE 5 ==========================================================*/}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Symon Sez Web Game"
                              data-tip
                              data-for="symon-sez-game"
                              onClick={() => setOpen2(true)}
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
                      {/* END PORTFOLIO PIECE 5 ==========================================================*/}
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
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Ave Simone</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
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
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
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
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  )
}

export default Portfolio
