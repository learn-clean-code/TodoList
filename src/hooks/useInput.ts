import { useState } from "react"

export const useInput = (initialValue = "", onSubmit) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return
    onSubmit(value)
    setValue("")
  }

  return {
    value,
    onChange,
    handleSubmit,
  }
}
