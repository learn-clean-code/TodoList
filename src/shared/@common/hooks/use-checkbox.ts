import { ChangeEventHandler, useState } from "react"

interface Props {
  defaultValue?: boolean
}

export default function useCheckbox(props: Props) {
  const [isChecked, setIsChecked] = useState(props.defaultValue || false)
  const onChangeChecked: ChangeEventHandler<HTMLInputElement> = (event) => setIsChecked(event.target.checked)

  return {
    isChecked,
    onChangeChecked,
  }
}
