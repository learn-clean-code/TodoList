import React from "react"
import classes from "./todo-layout.module.css"

interface Props {
  children: React.ReactNode
}

export default function TodoLayout(props: Props) {
  return <div className={classes["todo-layout"]}>{props.children}</div>
}
