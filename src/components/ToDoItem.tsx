import { useState } from 'react';
import styled from '@emotion/styled';
import CheckBox from '@/components/common/CheckBox';
import EditIcon from '@/assets/icons/EditIcon';
import { Todo } from '@/types/todo';
import { inputStyle } from '@/styles/commonStyle';

interface ToDoItemProps {
  todo: Todo;
  onChange: (newTodo: Todo) => void;
}

export default function ToDoItem({ todo, onChange }: ToDoItemProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleChangeChk: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange({ ...todo, isDone: e.target.checked });
  };

  return (
    <S.Container>
      <CheckBox id={todo.id} checked={todo.isDone} onChange={handleChangeChk} />
      {isEdit ? (
        <>
          <S.EditForm
            type="text"
            value={todo.text}
            onChange={(e) => {
              onChange({ ...todo, text: e.target.value });
            }}
          />
          <button onClick={() => setIsEdit(false)}>저장</button>
        </>
      ) : (
        <>
          <S.ToDoText
            $isDone={todo.isDone}
            onClick={() => onChange({ ...todo, isDone: !todo.isDone })}
          >
            {todo.text}
          </S.ToDoText>
          <button className="btn" onClick={() => setIsEdit(true)}>
            <EditIcon />
          </button>
        </>
      )}
    </S.Container>
  );
}

const S = {
  Container: styled.li`
    display: flex;
    align-items: center;
    padding: 0.8rem 0;

    button {
      margin-left: auto;
      color: ${({ theme }) => theme.color.main};
    }
  `,

  ToDoText: styled.span<{ $isDone: boolean }>`
    flex: 1;
    position: relative;
    margin-left: 0.5rem;
    color: ${({ $isDone, theme }) => ($isDone ? '#b0b0b0' : theme.color.basic)};
    word-wrap: break-word;
    opacity: ${({ $isDone }) => ($isDone ? 0.6 : 1)};
    transition:
      color 0.2s ease,
      opacity 0.2s ease;
    display: inline-block;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 50%;
      width: 100%;
      height: 0.2rem;
      background: #848383;
      transform: scaleX(${({ $isDone }) => ($isDone ? 1 : 0)});
      transform-origin: left;
      transition: transform 0.4s ease;
    }
  `,

  EditForm: styled.input`
    flex: 1;
    margin: 0 0.5rem;
    padding-bottom: 0.8rem;
    font-size: 1.6rem;
    ${inputStyle}
  `,
};
