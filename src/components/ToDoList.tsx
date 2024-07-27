import styled from '@emotion/styled';
import ToDoItem from '@/components/ToDoItem';
import { Todo } from '@/types/todo';

interface ToDoItemListProps {
  todoList: Todo[];
  onChange: (newTodoList: Todo[]) => void;
}

export default function ToDoList({ todoList, onChange }: ToDoItemListProps) {
  const handleUpdate = (todo: Todo) => {
    onChange(
      todoList.map((t) => {
        return t.id === todo.id ? todo : t;
      }),
    );
  };

  return (
    <S.ListContainer>
      {todoList.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onChange={handleUpdate} />
      ))}
    </S.ListContainer>
  );
}

const S = {
  ListContainer: styled.ul`
    width: 100%;
    margin-top: 1rem;
  `,
};
