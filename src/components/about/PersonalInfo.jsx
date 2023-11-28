import React from "react"

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "February 1",
        },
        {
          id: 3,
          name: "Current City",
          content: "Portland, OR",
        },
        {
          id: 4,
          name: "Hometown",
          content: "Chino, CA",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Study",
          content:
            "Univercity of Texas Univercity of Texas Univercity of Texas Univercity of Texas Univercity of Texas",
        },
        {
          id: 3,
          name: "Degree",
          content: "Master",
        },
        {
          id: 4,
          name: "Interest",
          content: "Playing Football",
        },
        {
          id: 5,
          name: "Freelance",
          content: "Available",
        },
      ],
    },
  ]
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="jlm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default PersonalInfo
