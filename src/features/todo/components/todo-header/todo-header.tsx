import React from "react"
import classes from "./todo-header.module.css"
import type { Todo } from "features/todo/types"

interface Props {
  todos: Todo[]
}

export default function TodoHeader(props: Props) {
  const taskCount = props.todos.filter((todo) => !todo.isDone).length
  return (
    <div className={classes["todo-header"]}>
      <div className={classes["todo-header__layout"]}>
        <span className={classes["todo-header__date"]}>Tuseday, 31</span>
        <span className={classes["todo-header__tasks"]}>{taskCount} Tasks</span>
      </div>
      <span className={classes["todo-header__day"]}>August</span>
    </div>
  )
}
