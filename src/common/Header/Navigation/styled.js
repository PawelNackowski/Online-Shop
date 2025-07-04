import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  padding: 10px 20px;
  border-top: 1px solid ${({theme}) => theme.colors.gray};
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
  max-width: 1000px;
  width: 100%;
`;

export const ListItem = styled.li`
  list-style: none;
  margin: 0 15px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.dark};

  &.active {
    border-bottom: 2px solid ${({theme}) => theme.colors.darkGray};
  }
`;
