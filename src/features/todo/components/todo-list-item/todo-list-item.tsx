import { ChangeEventHandler } from "react"
import { Input } from "shared/@common/components"
import { useCheckbox } from "shared/@common/hooks"
import type { Todo } from "features/todo/types"
import { MdCheck } from "react-icons/md"
import classes from "./todo-list-item.module.css"

export default function TodoListItem(props: Todo & { onUpdateTodo: (todoId: number) => void }) {
  const { onChangeChecked } = useCheckbox({ defaultValue: props.isDone })

  const handleChangeChecked: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChangeChecked(event)
    props.onUpdateTodo(props.id)
  }

  const listClassName = `${classes["todo-list-item"]} ${props.isDone ? classes["todo-list-item__done"] : ""}`

  return (
    <li className={listClassName}>
      <label htmlFor={`todo-list-item-${props.id}`} className={classes["todo-list-item__label"]}>
        <p className={classes["todo-list-item__contents"]}>{props.title}</p>
      </label>
      <div className={classes["todo-list-item__checkbox"]}>
        {props.isDone && (
          <label htmlFor={`todo-list-item-${props.id}`}>
            <MdCheck color="#fff" />
          </label>
        )}
        <Input
          type="checkbox"
          id={`todo-list-item-${props.id}`}
          checked={props.isDone}
          onChange={handleChangeChecked}
        />
      </div>
    </li>
  )
}
