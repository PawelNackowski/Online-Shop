import { useState } from "react";
import {
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledLabel,
  StyledLink,
  Wrapper,
  WrapperForm,
} from "./styled";
import { Icon } from "../styled";
import { users } from "./users";
import { useNavigate } from "react-router-dom";
import { toAbout, toRegister } from "../../namePlate";
import { useAuth } from "../../AuthContext";
import { StyledIconHidden, StyledIconShow } from "../HiddenShowPasswordIcon/style";
import { useTogglePasswordVisibility } from "../useTogglePasswordVisibility";

export const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { showPassword, togglePasswordVisibility } = useTogglePasswordVisibility();

  const onFormSubmit = (event) => {
    event.preventDefault();
    login(mail, password);
  };

  const login = (mail, password) => {
    const userData = localStorage.getItem("user");
    let storedUser = null;
    if (userData) {
      storedUser = JSON.parse(userData);
    }
    if (
      storedUser &&
      (storedUser.email === mail || storedUser.username === mail) &&
      storedUser.password === password
    ) {
      setUser(storedUser);
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
            {showPassword ? <StyledIconShow/> : <StyledIconHidden/>}
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
