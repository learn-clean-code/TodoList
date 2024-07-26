import { ChangeEventHandler, FormEventHandler, useState } from "react"

type OnSubmitFunction = (value: string) => void

export const useInput = (
  initialValue: string = "",
  onSubmit: OnSubmitFunction,
) => {
  const [value, setValue] = useState(initialValue)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
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
