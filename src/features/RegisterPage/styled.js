import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.veryLightGray};
  width: 100%;
  max-width: 440px;
  border-radius: 8px;
`;

export const StyledHeader = styled.h1`
  text-align: center;
  font-size: 28px;
  margin: 6px;
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
  background-color: ${({ theme }) => theme.colors.lightGray};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.blue};
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const WrapperInform = styled.div`
  height: 22px;
  font-weight: 600;
  font-style: italic;
`;

export const StyledError = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: 14px;
`;

export const StyledSuccess = styled.span`
  color: ${({ theme }) => theme.colors.green};
  font-size: 14px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blueDark};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkGray};
    cursor: not-allowed;
  }
`;

export const Icon = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
  right: -80%;
  top: -44px;
  cursor: pointer;
`;
