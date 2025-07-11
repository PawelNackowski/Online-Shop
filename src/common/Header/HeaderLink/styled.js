import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 18px 6px 0;
`;

export const styledIcon = (Icon) => styled(Icon)`
  width: 24px;
  height: 24px;

  &:hover {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.blue};
  }
  &:active {
    transform: scale(0.9);
    transition: transform 0.2s ease-in-out;
  }

  ${({ iconName, theme }) =>
    iconName === "favorite"
      ? `
    fill: none;
    stroke: ${theme.colors.dark};
    &:hover {
      fill: ${theme.colors.red};
      stroke: ${theme.colors.red};
    }
  `
      : ` ""
  `}
  ${({ iconName, theme }) =>
    iconName === "cart"
      ? `
    fill: none;
    stroke: ${theme.colors.dark};
    &:hover {
      stroke: ${theme.colors.blue};
    }
  `
      : ` ""
  `}
`;
