import { StyledLink, StyledList, StyledNavigation } from "./styled";

export const LoginButton = () => {
  return (
    <StyledNavigation>
      <StyledList>
        <li>
          <StyledLink to="/login">Login</StyledLink>
        </li>
        /
        <li>
          <StyledLink to="/register">Register</StyledLink>
        </li>
      </StyledList>
    </StyledNavigation>
  );
};
