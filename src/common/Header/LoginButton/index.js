import { useAuth } from "../../../AuthContext";
import { StyledLink, StyledList, StyledNavigation } from "./styled";

export const LoginButton = () => {
  const {user} = useAuth();

  return (
    <StyledNavigation>
      <StyledList>
        {user ? (
          <li>Hello {user.nickname}</li>
        ) : (
          <>
          <li>
          <StyledLink to="/login">Login</StyledLink>
        </li>
        /
        <li>
          <StyledLink to="/register">Register</StyledLink>
        </li>
        </>
        )}
      </StyledList>
    </StyledNavigation>
  );
};
