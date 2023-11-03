import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  gap: 10px;
`

export const Button = styled.button`
  background-color: #fff;
  border-radius: 8px;
  border-width: 1px;
  padding: 8px;
  cursor: pointer;


  &:hover {
    background-color: #fffff0;
  }
`