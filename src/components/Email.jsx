import * as React from "react"
import { Html } from "@react-email/html"
import { Button } from "@react-email/button"

export function Email(props) {
  const [body, title, sender] = [props.body, props.title, props.sender]

  return (
    <Html lang="en">
      <body>
        <h1>{title}</h1>
        <h3>From: {sender}</h3>
        <p>{body}</p>
      </body>
    </Html>
  )
}
