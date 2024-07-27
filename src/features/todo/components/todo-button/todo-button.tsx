import { HiPlus } from "react-icons/hi2"
import { useToggle } from "shared/@common/hooks"
import { Todo } from "features/todo/types"
import { Modal } from "shared/@common/components"
import { TodoForm } from "features/todo/components"
import { motion } from "framer-motion"
import { toggleAnimation } from "shared/@common/animation"
import classes from "./todo-button.module.css"

interface Props {
  onCreateTodo: (todo: Todo) => void
}

export default function TodoButton(props: Props) {
  const { isToggle, onToggle } = useToggle(false)

  return (
    <>
      <Modal isOpenModal={isToggle} onCloseModal={onToggle}>
        <Modal.Layout>
          <TodoForm onCreateTodo={props.onCreateTodo} />
        </Modal.Layout>
      </Modal>
      <div className={classes["todo-button"]}>
        <motion.button onClick={onToggle} variants={toggleAnimation} animate={isToggle ? "active" : "inActive"}>
          <HiPlus color="#fff" fontSize={24} />
        </motion.button>
      </div>
    </>
  )
}
