import { useEffect, useState } from "react"

export default function useToggle(initialState: boolean) {
  const [isToggle, setIsToggle] = useState(initialState || false)
  const onOpenToggle = () => setIsToggle(true)
  const onCloseToggle = () => setIsToggle(false)
  const onToggle = () => setIsToggle((prevToggle) => !prevToggle)

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.code === "Escape") return onCloseToggle()
    }

    window.addEventListener("keydown", keyDownHandler)
    return () => window.removeEventListener("keydown", keyDownHandler)
  }, [])

  return {
    isToggle,
    onToggle,
    onOpenToggle,
    onCloseToggle,
  }
}
