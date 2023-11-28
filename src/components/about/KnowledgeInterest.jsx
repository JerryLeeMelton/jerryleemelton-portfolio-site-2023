import React from "react"

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Skills",
      content: ["Javascript, Typescript", "HTML5", "CSS 3, SASS", "React"],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Make UI/UX Design",
        " Create Mobile App",
        " Site Optimization",
        " Custom Website",
        "Learn Ecommerce",
      ],
    },
  ]

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="jlm_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="jlm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default KnowledgeInterest
