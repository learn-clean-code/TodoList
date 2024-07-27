import { createContext, useContext } from "react"
import Portal from "../portal/portal"
import classes from "./modal.module.css"
import { LayoutType, ModalContextType } from "./modal.type"

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
  if (!props.isOpenModal) return null

  return (
    <ModalContext.Provider value={{ ...props }}>
      <Portal elementId="modal-root">
        <div className={classes.modal}>{props.children}</div>
      </Portal>
    </ModalContext.Provider>
  )
}

function Layout(props: LayoutType) {
  return <div className={classes["modal-layout"]}>{props.children}</div>
}

function Backdrop() {
  const modalContext = useModalContext()
  return (
    <Portal elementId="backdrop-root">
      <div className={classes["modal-backdrop"]} onClick={modalContext.onCloseModal}></div>
    </Portal>
  )
}

Modal.Backdrop = Backdrop
Modal.Layout = Layout
