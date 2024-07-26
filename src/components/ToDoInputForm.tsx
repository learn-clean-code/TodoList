import { useState } from 'react';
import styled from '@emotion/styled';
import { Todo } from '@/types/todo';
import { PLACEHOLDER } from '@/constants/MESSAGE';

interface TodoInputProps {
  addTodo: (todo: Todo) => void;
}

export default function ToDoInputForm({ addTodo }: TodoInputProps) {
  const [inputText, setInputText] = useState<string>('');
  const isInputValid = inputText.trim().length > 1;

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newTodo = {
      id: `${Date.now()}`,
      text: inputText,
    };
    addTodo(newTodo);
    setInputText('');
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={PLACEHOLDER.ADD_TASK}
      />
      <S.AddBtn type="submit" disabled={!isInputValid}>
        Add
      </S.AddBtn>
    </S.FormContainer>
  );
}

const S = {
  FormContainer: styled.form`
    width: 30rem;
    display: flex;
    gap: 1.2rem;
  `,

  Input: styled.input`
    width: 100%;
    padding: 0.8rem 1rem;
    border: none;
    border-bottom: 1px solid #ccc;

    :focus {
      border-bottom: 1px solid ${({ theme }) => theme.color.main};
    }
    ::placeholder {
      color: #b9b9b9;
    }
  `,

  AddBtn: styled.button`
    padding: 0.4rem;
    color: ${({ theme }) => theme.color.main};
  `,
};
