import { useAuth } from "../../../AuthContext";
import { toLogin, toRegister } from "../Navigation/routes";
import { StyledLink, StyledList, StyledNavigation } from "./styled";

export const HeaderLink = () => {
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
            <li>Hello {user.username || user.nickname}</li>
            <StyledLink onClick={handleLogout}>Logout</StyledLink>
          </>
        ) : (
          <>
            <li>
              <StyledLink to={toLogin()}>Login</StyledLink>
            </li>
            /
            <li>
              <StyledLink to={toRegister()}>Register</StyledLink>
            </li>
          </>
        )}
      </StyledList>
    </StyledNavigation>
  );
};
