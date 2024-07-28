import { FormEventHandler } from "react"

type Callback = () => void

export default function useSubmit(callback: Callback) {
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    callback()
  }

  return onSubmit
}
