import { useEffect } from "react"
import { HiPlus } from "react-icons/hi2"
import { useToggle } from "shared/@common/hooks"
import { Todo } from "features/todo/types"
import TodoForm from "../todo-form/todo-form"
import { Modal } from "shared/@common/components"
import classes from "./todo-button.module.css"

interface Props {
  onCreateTodo: (todo: Todo) => void
}

export default function TodoButton(props: Props) {
  const { isToggle, onToggle } = useToggle(false)

  useEffect(() => {
    const bodyElement = document.querySelector("body")! as HTMLElement
    isToggle ? bodyElement.classList.add("modal-open") : bodyElement.classList.remove("modal-open")
  }, [isToggle])

  return (
    <>
      <Modal isOpenModal={isToggle} onCloseModal={onToggle}>
        <Modal.Backdrop />
        <Modal.Layout>
          <TodoForm onCreateTodo={props.onCreateTodo} />
        </Modal.Layout>
      </Modal>
      <div className={isToggle ? classes["todo-button__add"] : classes["todo-button__exit"]}>
        <button onClick={onToggle} className={classes["todo-button"]}>
          <HiPlus color="#fff" fontSize={24} />
        </button>
      </div>
    </>
  )
}
