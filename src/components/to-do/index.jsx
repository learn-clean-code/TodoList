import { useState } from 'react'
import CheckButton from '../common/button/check-button'

function ToDo() {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckButton = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex justify-between py-5 ">
      <div className="cursor-pointer" onClick={handleCheckButton}>
        안녕
      </div>
      <CheckButton isChecked={isChecked} onChange={setIsChecked} />
    </div>
  )
}

export default ToDo
