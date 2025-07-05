
import styled from "styled-components";

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  max-width: 1400px;
  width: 100%;
`;
export const StyledList = styled.ul`
  padding-top: 56px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  padding: 10px;

  &.active {
    font-weight: bold;
  }
`;

export const IconLink = styled.a``;


export const styledIcon = (Icon) => styled(Icon)`
  width: 24px;
  height: 24px;
`;
