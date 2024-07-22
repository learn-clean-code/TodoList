import { ChangeEventHandler } from "react"
import { Input } from "shared/@common/components"
import { useCheckbox } from "shared/@common/hooks"
import type { Todo } from "features/todo/types"
import classes from "./todo-list-item.module.css"

export default function TodoListItem(props: Todo & { onUpdateTodo: (todoId: number) => void }) {
  const { isChecked, onChangeChecked } = useCheckbox({ defaultValue: false })

  const handleChangeChecked: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChangeChecked(event)
    props.onUpdateTodo(props.id)
  }

  const listClassName = `${classes["todo-list-item"]} ${props.isDone ? classes["todo-list-item__active"] : ""}`

  return (
    <li className={listClassName}>
      <label htmlFor={`todo-list-item-${props.id}`}>
        <p className={classes["todo-list-item__contents"]}>{props.title}</p>
      </label>
      <Input
        type="checkbox"
        id={`todo-list-item-${props.id}`}
        checked={isChecked}
        onChange={handleChangeChecked}
        className={classes["todo-list-item__checkbox"]}
      />
    </li>
  )
}
