import * as React from "react"

export const Nomenator = (props) => {
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
                Nomenator - File Renamer
              </h3>
              <img
                src="assets/img/casestudies/nomenator/Nomenator_Portfolio_HeroImage_cropped.webp"
                alt="Nomenator"
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
                Many existing file renaming apps, while powerful, come with UIs
                that feel dated. I wanted a modern solution with an intuitive
                layout and polish that could handle batch renaming tasks without
                the clunky, old-school feel of the existing options.
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
                I created Nomenator, a desktop file renaming utility built with
                Electron, React, Redux, and Tailwind, with Go language
                integration for the renaming logic. This approach allowed me to
                deliver a more refined user experience without sacrificing
                performance. The clean interface and real-time previews help
                users quickly see how changes will look, all within a clean,
                modern aesthetic.
              </p>
              <h4 className="marg-bottom-half">Existing Solutions</h4>
              <p className="marg-bottom-one-and-half">
                In my career as a designer and photographer, I've often had the
                need to rename many files at a time. I've used many existing
                applications, but even many of the best options seem to have
                user interfaces that feel outdated.
              </p>
              <img
                src="assets/img/casestudies/nomenator/old_ui_example.webp"
                alt="Nomenator"
                className="marg-bottom-one-and-half"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                Examples of outdated UI design
              </div>
              <p className="marg-bottom-one-and-half">
                When working on Nomenator, my main goal was to create something
                with all of the power and utility of those older applications,
                but with more modern design sensibilities. I wanted the user
                experience to be as seamless and refined as possible.
              </p>
              <h4 className="marg-bottom-half">Tech Stack</h4>
              <p className="marg-bottom-one-and-half">
                Among the first decisions that I made for the app was the choice
                of the tech stack that I'd use to build the app. After some
                consideration, I decided on the following configuration:
              </p>
              <ul className="marg-bottom-one-and-half case-study-list">
                <li>
                  <strong>Electron & React:</strong> Electron provided the
                  ability to create a cross-platform desktop experience with a
                  single codebase.
                </li>
                <li>
                  <strong>Redux:</strong> I felt Redux was essential to allow
                  the management of application state, including lists of files,
                  rename rules, and user selections.
                </li>
                <li>
                  <strong>Tailwind CSS:</strong> Despite Tailwind having been on
                  my radar for some time, I had never used it before so I very
                  much wanted to try it out for this project. I turned out to be
                  helpful in rapid styling with a modern, consistent look.
                </li>
                <li>
                  <strong>Go Integration:</strong> For this project, I wanted to
                  explore the idea of using different languages together in the
                  same project. I've done a bit of work in Go before and I
                  really love the language so I thought it would be a great
                  language to try out. Because of its high performance, Go
                  turned out to be a great candidate for the preview and rename
                  operations.
                </li>
              </ul>
              <h4 className="marg-bottom-half">Interface Design</h4>
              <img
                src="assets/img/casestudies/nomenator/nomenator_main_screen.webp"
                alt="Nomenator"
                className="marg-bottom-one-and-half"
              />
              <div className="case-study-image-caption marg-bottom-one-and-half">
                Nomenator UI
              </div>
              <p className="marg-bottom-one-and-half">
                Since the design of other similar apps was my primary reason for
                wanting to take on this project, it was very important to me to
                get that aspect of Nomenator right. Some of the key design
                decisions include:
              </p>
              <ul className="marg-bottom-one-and-half case-study-list">
                <li>
                  <strong>Two-panel layout:</strong> I chose a two panel layout
                  for the app to make sure that the user always sees what
                  they're working on along with the list of files and previews
                  of operations. The top panel is for the main user interactions
                  (such as choosing files or editing rename rule options) while
                  the bottom panel is reserved for displaying the list of
                  working files and their previewed names after any rename rules
                  would be applied.
                </li>
                <li>
                  <strong>Two-tab layout:</strong> Since the workflow of the app
                  is divided into two distinct operations--selecting files and
                  then creating rename rules for them--I thought that a two tab
                  layout for the top panel would be a great way to divide up the
                  UI.
                </li>
                <li>
                  <strong>Strong visual feedback:</strong> It is important to me
                  to have good UX in the projects that I work on, so I have made
                  sure that there is strong visual feedback (such as hover
                  effects, animations, etc.) when the user takes action in the
                  app so that the app is as clear as possible.
                </li>
                <li>
                  <strong>Custom title bar:</strong> The standard Electron title
                  bar works fine, but I wanted to provide a presentation that
                  went beyond "default".
                </li>
              </ul>
              <h4 className="marg-bottom-half">Looking Forward</h4>
              <p className="marg-bottom-one-and-half">
                While I'm proud of the work that I've done so far on Nomenator,
                I'd like to continue to make improvements to the app until it's
                the definitive file renaming application. Some of the planned
                additional features include:
              </p>
              <ul className="marg-bottom-one-and-half case-study-list">
                <li>
                  <strong>Drag and drop functionality:</strong> The ability to
                  drag and drop items--both within the rename rules section and
                  into the directory selection section--would go a long way in
                  making the app more user friendly.
                </li>
                <li>
                  <strong>Undo/Redo:</strong> I think this is an essential
                  feature to have in an app that deals with files on the user's
                  computer.
                </li>
                <li>
                  <strong>Expanded rename rule options:</strong> This an area
                  where I think there are the most improvements to be made.
                  Adding more powerful renaming features to the app would allow
                  users to use the app to do exactly what they want to do, no
                  matter how complex their renaming tasks might be.
                </li>
                <li>
                  <strong>Saving/Loading of rename rule presets:</strong> For
                  users who do a lot of the same or similar operations on a
                  regular basis, this would be, in my opinion, a game changer.
                </li>
              </ul>
              <div className="jlm_button">
                <button
                  className="ib-button"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(
                      "https://github.com/JerryLeeMelton/nomenator",
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
