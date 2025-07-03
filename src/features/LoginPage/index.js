import { useEffect, useState } from "react";
import {
  Icon,
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledLabel,
  StyledLink,
  Wrapper,
  WrapperForm,
} from "./styled";
import { users } from "./users";
import { useNavigate } from "react-router-dom";
import { toAbout, toRegister } from "../../common/Header/Navigation/routes";
import { useAuth } from "../../AuthContext";

export const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const LoadUserData = () => {
      const userData = localStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        console.log("User data loaded from localStorage:", user);
      }
    };
    LoadUserData();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    login(mail, password);
  };

  const login = (mail, password) => {

    console.log("=== LOGIN DEBUG ===");
    console.log("Input mail:", mail);
    console.log("Input password:", password);

    const userData = localStorage.getItem("user");
    let storedUser = null;
    if (userData) {
      storedUser = JSON.parse(userData);

      console.log("Parsed storedUser:", storedUser);
      console.log("storedUser.mail:", storedUser.mail);
      console.log("storedUser.nickname:", storedUser.username);
      console.log("storedUser.password:", storedUser.password);
    }
    if (
      storedUser &&
      (storedUser.email === mail || storedUser.username === mail) &&
      storedUser.password === password
    ) {
      console.log("User found in localStorage:", storedUser);
      setUser(storedUser);
      alert(`Welcome back ${storedUser.nickname}!`);
      navigate(toAbout());
      return;
    }

    const user = users.find(
      (user) =>
        (user.mail === mail || user.nickname === mail) &&
        user.password === password
    );

    console.log("Founder user:", user);
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("User logged in:", user);
      alert(`Welcome ${user.nickname}!`);
      navigate(toAbout());
    } else {
      alert("Invalid user or password");
    }
  };

  return (
    <Wrapper>
      <StyledHeader>Login</StyledHeader>
      <StyledForm onSubmit={onFormSubmit}>
        <WrapperForm>
          <StyledLabel>mail or E-mail</StyledLabel>
          <StyledInput
            type="text"
            name="mail"
            value={mail}
            onChange={({ target }) => setMail(target.value)}
            placeholder="mail or email"
            required
          />
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="password"
            required
          />
          <Icon onClick={togglePasswordVisibility}>
            {showPassword ? "hide" : "show"}
          </Icon>
          <StyledButton type="submit" disabled={!mail || !password}>
            Login
          </StyledButton>
        </WrapperForm>
        Already have an account?{" "}
        <StyledLink to={toRegister()}>Register</StyledLink>
      </StyledForm>
    </Wrapper>
  );
};
