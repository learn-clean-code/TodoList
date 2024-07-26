import { useState } from 'react';
import styled from '@emotion/styled';
import ToDoInputForm from '@/components/ToDoInputForm';
import ToDoItemList from '@/components/ToDoItemList';
import { Todo } from '@/types/todo';
import { MainLayout } from '@/styles/layout/MainLayout';

export default function ToDoApp() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <MainLayout>
      <S.Container>
        <ToDoInputForm addTodo={addTodo} />
        <ToDoItemList todoList={todoList} />
      </S.Container>
    </MainLayout>
  );
}

const S = {
  Container: styled.div`
    width: 35rem;
    height: 40rem;
    padding: 2rem;
    box-shadow: 0 1rem 2rem hsl(0 0% 0% / 20%);
    border-radius: 0.8rem;
  `,
};
