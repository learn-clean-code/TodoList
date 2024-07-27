import theme from '@/styles/theme';

export const inputStyle = `
border: none;
border-bottom: 1px solid #ccc;

:focus {
  border-bottom: 1px solid ${theme.color.main};
}
::placeholder {
  color: #b9b9b9;
}
`;
