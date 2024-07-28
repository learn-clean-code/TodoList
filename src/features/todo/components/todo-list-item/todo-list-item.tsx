import { ChangeEventHandler } from "react"
import { useCheckbox } from "shared/@common/hooks"
import type { Todo } from "features/todo/types"
import classes from "./todo-list-item.module.css"
import { motion } from "framer-motion"
import { checkboxAnimation, checkboxSVGAnimation, todoContentsAnimatmion } from "shared/@common/animation"

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
        <motion.p
          className={classes["todo-list-item__contents"]}
          animate={props.isDone ? "checked" : "unChecked"}
          initial={false}
          variants={todoContentsAnimatmion}
        >
          {props.title}
        </motion.p>
      </label>
      <div className={classes["todo-list-item__checkbox"]}>
        <motion.svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          initial={false}
          animate={props.isDone ? "checked" : "unChecked"}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
            variants={checkboxSVGAnimation}
            stroke="#fff"
          />
        </motion.svg>

        <motion.input
          type="checkbox"
          id={`todo-list-item-${props.id}`}
          checked={props.isDone}
          onChange={handleChangeChecked}
          initial={false}
          animate={props.isDone ? "checked" : "unChecked"}
          variants={checkboxAnimation}
        />
      </div>
    </li>
  )
}
