import { useState } from "react";
import { Icon, StyledButton, StyledForm, StyledHeader, StyledIcon, StyledInput, StyledLabel, StyledLink, Wrapper, WrapperForm } from "./styled";
import { users } from "./users";
import { redirect, useNavigate } from "react-router-dom";
import { toAbout, toRegister } from "../../common/Header/Navigation/routes";
import { useAuth } from "../../AuthContext";

export const LoginPage = () => {
  const [usermail, setusermail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    login(usermail, password);
  };

  const login = (usermail, password) => {
    const user = users.find(
      (user) =>
        (user.usermail === usermail) | (user.nickname === usermail) &&
        user.password === password
    );

    if (user) {
      setUser(user);
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
          <StyledLabel>usermail or E-mail</StyledLabel>
          <StyledInput
            type="text"
            name="usermail"
            value={usermail}
            onChange={({ target }) => setusermail(target.value)}
            placeholder="usermail or email"
            required
          />
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            type={showPassword ? " text" : "password"}
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            placeholder="password"
            required
            />
            <Icon onClick={togglePasswordVisibility}>{showPassword? "hide" : "show"}</Icon>
          <StyledButton 
            type="submit"
            disabled={!usermail || !password}>
            Login</StyledButton>
        </WrapperForm>
        Already have an account? <StyledLink to={toRegister()}>Register</StyledLink>
      </StyledForm>
    </Wrapper>
  );
};