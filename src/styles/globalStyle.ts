import { css } from '@emotion/react';
import reset from 'emotion-reset';
import theme from '@/styles/theme';

const globalStyle = css`
  ${reset}

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Pretendard;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${theme.color.basic};
    max-width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
  }

  div,
  span {
    font-family: Pretendard;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    background: transparent;
  }

  img,
  a {
    cursor: pointer;
    /* user-drag: none; */
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    outline: none;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  textarea {
    outline: none;
    resize: none;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export default globalStyle;
