import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  max-width: 1400px;
  width: 100%;
`;
export const StyledList = styled.ul`
  display: flex;
  list-style: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding: 10px;

  &.active {
    font-weight: bold;
  }
`;
