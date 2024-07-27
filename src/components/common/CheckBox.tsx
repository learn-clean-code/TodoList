import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

interface CheckProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

export default function CheckBox({ id, ...checkboxProps }: CheckProps) {
  return (
    <S.Container className="체크">
      <S.CheckBox type="checkbox" id={id} {...checkboxProps}></S.CheckBox>
      <label htmlFor={id} />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 1.8rem;
    height: 1.8rem;
  `,

  CheckBox: styled.input`
    width: 100%;
    height: 100%;
    margin: 0;
    border-radius: 50%;
    border: 1px solid #ccc;
    appearance: none;
    cursor: pointer;

    :checked {
      background-color: ${({ theme }) => theme.color.main};
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      border: 1px solid transparent;
    }
  `,
};
