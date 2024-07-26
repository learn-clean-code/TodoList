import styled from '@emotion/styled';
import CheckBox from '@/components/common/Checkbox';
import { TodoList } from '@/types/todo';

export default function ToDoItemList({ todoList }: TodoList) {
  console.log(todoList);
  return (
    <S.ListContainer>
      {todoList.map((todo) => (
        <S.ToDoItem>
          <CheckBox id={todo.id} />
          <span>{todo.text}</span>
        </S.ToDoItem>
      ))}
    </S.ListContainer>
  );
}

const S = {
  ListContainer: styled.ul`
    width: 100%;
    margin-top: 1rem;
  `,

  ToDoItem: styled.li`
    display: flex;
    align-items: center;
    padding: 0.8rem 0;

    span {
      margin-left: 0.5rem;
    }
  `,
};
