import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgb(240, 240, 240);
  color: rgb(48, 48, 48);
  width: 100%;
  max-width: 440px;
  border-radius: 8px;
`;

export const StyledHeader = styled.h1`
  text-align: center;
  font-size: 28px;
  margin: 6px ;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  gap: 10px;
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;
`;

export const StyledLabel = styled.label`
  text-align: left;
  font-weight: bold;
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 2px solid transparent;
  width: 100%;
  box-sizing: border-box;
  background-color: rgb(230, 230, 230);
  &:focus {
    border: 2px solid #007bff;
    outline: none;
  }
  &::placeholder {
    color: rgb(170, 170, 170);
  }
`;

export const WrapperInform = styled.div`
  height: 22px;
  `;

export const StyledError = styled.span`
  color: red;
  font-size: 14px;
`;

export const StyledSuccess = styled.span`
  color: green;
  font-size: 14px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: rgb(0, 98, 203);
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const Icon = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
  right: -80%;
  top: -44px;
  color: rgb(0, 0, 0);
  cursor: pointer;
`;
