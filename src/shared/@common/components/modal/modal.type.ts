import { ReactNode } from "react"

export interface ModalContextType {
  isOpenModal: boolean
  onCloseModal: () => void
  children: ReactNode
}

export interface LayoutType {
  children: ReactNode
}
