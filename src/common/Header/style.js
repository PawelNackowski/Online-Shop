import styled from "styled-components";
import LogoImg from "./Logo.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  height: 100px;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
`;

export const Logo = styled.div`
  background-image: url(${LogoImg});
  background-size: cover;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;
