import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: #fcf7f7;
  &.active {
    color: #f28a8a ;
  }
`;

export const WrapperAuthNav = styled.ul`
  background-color: #5c100a;

  display: flex;
  font-size: 0;
  gap: 16px;
`;
