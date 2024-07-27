import { useState } from "react"

export default function useToggle(initialState: boolean) {
  const [isToggle, setIsToggle] = useState(initialState || false)
  const onOpenToggle = () => setIsToggle(true)
  const onCloseToggle = () => setIsToggle(false)
  const onToggle = () => setIsToggle((prevToggle) => !prevToggle)

  return {
    isToggle,
    onToggle,
    onOpenToggle,
    onCloseToggle,
  }
}
