import { TODO_ACTIONS } from "@/reducers/todoReducer"

export const useUpdateTodo =
  (dispatchTodos: React.Dispatch<any>) => (id: string, content: string) => {
    dispatchTodos({
      type: TODO_ACTIONS.UPDATE_TODO,
      payload: { id, content },
    })
  }
