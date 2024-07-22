import React from "react"
import classes from "./todo-header.module.css"

export default function TodoHeader() {
  return (
    <div className={classes["todo-header"]}>
      <div className={classes["todo-header__layout"]}>
        <span className={classes["todo-header__date"]}>Tuseday, 31</span>
        <span className={classes["todo-header__tasks"]}>6 Tasks</span>
      </div>
      <span className={classes["todo-header__day"]}>August</span>
    </div>
  )
}
