import { ReactNode } from "react"
import { createPortal } from "react-dom"

interface Props {
  children: ReactNode
  elementId: string
}

export default function Portal(props: Props) {
  const containerElement = document.getElementById(props.elementId)! as HTMLElement
  const portal = createPortal(props.children, containerElement)
  return portal
}
