import { createContext, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Portal } from "shared/@common/components"
import { LayoutType, ModalContextType } from "./modal.type"
import { backdropAnimation, modalAnimation } from "shared/@common/animation"
import classes from "./modal.module.css"

const ModalContext = createContext<ModalContextType>({
  isOpenModal: false,
  onCloseModal: () => {},
  children: null,
})

function useModalContext() {
  const modalContext = useContext(ModalContext)
  if (!modalContext) throw new Error("해당 컴포넌트는 ModalContext에서 사용해주세요.")

  return modalContext
}

export default function Modal(props: ModalContextType) {
  return (
    <ModalContext.Provider value={{ ...props }}>
      {/* <Portal elementId="modal-root"> */}
      <AnimatePresence>
        {props.isOpenModal && (
          <motion.div
            className={classes.modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalAnimation}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
      {/* </Portal> */}
      <Backdrop />
    </ModalContext.Provider>
  )
}

function Layout(props: LayoutType) {
  return <div className={classes["modal-layout"]}>{props.children}</div>
}

function Backdrop() {
  const modalContext = useModalContext()

  return (
    // <Portal elementId="backdrop-root">
    <AnimatePresence>
      {modalContext.isOpenModal && (
        <motion.div
          className={classes["modal-backdrop"]}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropAnimation}
          onClick={modalContext.onCloseModal}
        />
      )}
    </AnimatePresence>
    // </Portal>
  )
}

Modal.Backdrop = Backdrop
Modal.Layout = Layout
