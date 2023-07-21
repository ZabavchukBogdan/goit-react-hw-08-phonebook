import styled from 'styled-components';

export const WrapperUserMenu = styled.div`
  background-color: #5c100a;

  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.p`
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
`;

export const Button = styled.button`
  width: fit-content;
  border-radius: 5px;
  border-color: #050000;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  background-color: #f28a8a;
  outline: none;
  &:hover {
    background-color: #5c100a;
    color: #fcf7f7;
    border-color: #fff;
  }
`;
