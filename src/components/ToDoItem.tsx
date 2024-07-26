import CheckBox from '@/components/common/Checkbox';
import { Todo } from '@/types/todo';
import styled from '@emotion/styled';

interface ToDoItemProps {
  todo: Todo;
  onChange: (newTodo: Todo) => void;
}

export default function ToDoItem({ todo, onChange }: ToDoItemProps) {
  const handleChangeChk: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange({ ...todo, isDone: e.target.checked });
  };

  return (
    <S.Container>
      <CheckBox id={todo.id} checked={todo.isDone} onChange={handleChangeChk} />
      <S.ToDoText $isDone={todo.isDone}>{todo.text}</S.ToDoText>
    </S.Container>
  );
}

const S = {
  Container: styled.li`
    display: flex;
    align-items: center;
    padding: 0.8rem 0;
  `,

  ToDoText: styled.span<{ $isDone: boolean }>`
    position: relative;
    margin-left: 0.5rem;
    color: ${({ $isDone, theme }) =>
      $isDone ? '#b0b0b0' : theme.color.basic}; /* 글씨 색상 */
    opacity: ${({ $isDone }) => ($isDone ? 0.6 : 1)}; /* 글씨 연하게 */
    transition:
      color 0.2s ease,
      opacity 0.2s ease;

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
      transition: transform 0.4s ease; /* 줄 색상의 애니메이션 */
    }
  `,
};
