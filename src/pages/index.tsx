import CheckList from "@/components/CheckList"
import FillInForm from "@/components/FillInForm"
import ListHeader from "@/components/ListHeader"
import { ListProvider } from "@/context/ListContext"
const TodoList = () => {

  return(
    <ListProvider>
      <div className="flex justify-center items-center min-h-screen">
    <div className="w-400 h-500 border-1 relative">
      <ListHeader/>
      <CheckList />
      <FillInForm/>
    </div>
    </div>
    </ListProvider>
    
  )
}

export default TodoList