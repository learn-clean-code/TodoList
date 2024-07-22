import React from "react"
import { TodoListItem } from "features/todo/components"
import type { Todo } from "features/todo/types"
import classes from "./todo-list.module.css"

interface Props {
  todos: Todo[]
  onUpdateTodo: (todoId: number) => void
}

export default function TodoList(props: Props) {
  return (
    <ul className={classes["todo-list"]}>
      {props.todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} onUpdateTodo={props.onUpdateTodo} />
      ))}
    </ul>
  )
}
