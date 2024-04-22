import React from "react"

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2024",
          institute: "Google",
          degree: "Google UX Design Certificate",
        },
        {
          id: 2,
          year: "2021",
          institute: "Udemy",
          degree: "The Complete Web Development Bootcamp",
        },
        {
          id: 3,
          year: "2019",
          institute: "Glendale Community College",
          degree: "Certificate, Computer Software Technician",
        },
        {
          id: 4,
          year: "2010",
          institute: "Mt. San Antonio College",
          degree: "A.S., Computer Graphic Design / Photography",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2022 - Present",
          institute: "Rewire Neuro",
          degree: "Front-End Developer & UX/UI Designer",
        },
        {
          id: 2,
          year: "2016 - 2020",
          institute: "Freelance",
          degree: "Photographer & Photo Editor",
        },
        {
          id: 3,
          year: "2016 - 2020",
          institute: "Autry Museum of the American West",
          degree: "Photographer & Web Admin Assistant",
        },
        {
          id: 4,
          year: "2012 - 2016",
          institute: "Modernica",
          degree: "Graphic Designer & Photographer",
        },
        {
          id: 5,
          year: "2006 - 2012",
          institute: "Baby Trend",
          degree: "Graphic Designer & Photographer",
        },
      ],
    },
  ]
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="jlm_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="jlm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default Resume
