import { useAuth } from "../../../AuthContext";
import { StyledLink, StyledList, StyledNavigation } from "./styled";

export const LoginButton = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
    alert("You have been logged out.");
  }

  return (
    <StyledNavigation>
      <StyledList>
        {user ? (
          <>
            <li>Hello {user.nickname}</li>
            <StyledLink onClick={handleLogout}>Logout</StyledLink>
          </>
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
