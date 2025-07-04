import { useState } from "react";
import {
  StyledButton,
  StyledError,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledLabel,
  StyledSuccess,
  Wrapper,
  WrapperForm,
  WrapperInform,
} from "../RegisterPage/styled";
import { useNavigate } from "react-router-dom";
import { toLogin } from "../../common/Header/Navigation/routes";

export const PageRegister = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();
    SaveUserData();
    alert("Register successful!, you can now log in.");
    navigate(toLogin());
  };

  const SaveUserData = () => {
    const userData = {
      username,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <Wrapper>
      <StyledHeader>Register</StyledHeader>
      <StyledForm onSubmit={onFormSubmit}>
        <WrapperForm>
          <StyledLabel>Username</StyledLabel>
          <StyledInput
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            placeholder="Enter your username"
            required
          />
        </WrapperForm>
        <WrapperForm>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="Enter your email"
          />
        </WrapperForm>
        <WrapperForm>
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="Enter your password"
          />
          <StyledLabel>Confirm password</StyledLabel>
          <StyledInput
            type="password"
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
            placeholder="Confirm your password"
          />
          <WrapperInform>
            {confirmPassword &&
              (password !== confirmPassword ? (
                <StyledError>Passwords do not match</StyledError>
              ) : (
                <StyledSuccess>Passwords match</StyledSuccess>
              ))}
          </WrapperInform>
        </WrapperForm>
        <StyledButton
          type="submit"
          disabled={
            !username ||
            !email ||
            !email.includes("@") ||
            !password ||
            !confirmPassword ||
            password !== confirmPassword
          }
        >
          Register
        </StyledButton>
      </StyledForm>
    </Wrapper>
  );
};
