import { FormEventHandler } from "react"
import { Input } from "shared/@common/components"
import { useInput } from "shared/@common/hooks"
import { Todo } from "features/todo"
import classes from "./todo-form.module.css"

interface Props {
  onCreateTodo: (todo: Todo) => void
}

export default function TodoForm(props: Props) {
  const { value, onChangeValue, onResetValue } = useInput({ defaultValue: "" })

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const newTodo: Todo = {
      id: new Date().getTime(),
      title: value,
      isDone: false,
    }

    props.onCreateTodo(newTodo)
    onResetValue()
  }

  return (
    <form className={classes["todo-form"]} onSubmit={handleSubmit}>
      <legend className={classes["todo-form__legend"]}>Add Task</legend>
      <Input
        type="text"
        placeholder="Add Task here"
        id={"todo-form-input"}
        value={value}
        onChange={onChangeValue}
        className={classes["todo-form__input"]}
      />
      <button className={classes["todo-form__submit"]}>SAVE</button>
    </form>
  )
}
