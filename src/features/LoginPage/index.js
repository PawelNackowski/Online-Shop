import { useState } from "react";
import { StyledForm, Wrapper, WrapperForm } from "./styled";
import { users } from "./users";
import { useNavigate } from "react-router-dom";
import { toAbout } from "../../common/Header/Navigation/routes";

export const LoginPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    login(username, password);
  };

  const login = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      alert(`Welcome ${user.nickname}!`);
      navigate(toAbout())
    } else {
      alert("Invalid username or password");
   };
    }



  return (
    <Wrapper>
      <h1>Login Page</h1>
      <p>Please enter your credentials to log in.</p>
      <StyledForm onSubmit={onFormSubmit}>
        <WrapperForm>
          <label>E-mail</label>
          <input type="mail" name="username" value={username} onChange={({target}) => setUsername(target.value)} placeholder="Enter your username" required />
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={({target}) => setPassword(target.value)} placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </WrapperForm>
      </StyledForm>
    </Wrapper>
  );
}