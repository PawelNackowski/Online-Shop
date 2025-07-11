import { HeaderLink } from "./HeaderLink";
import { Logo, Wrapper } from "./style";

export const Header = () => {
  return (
    <>
      <Wrapper>
        Menu
        <Logo />
        <HeaderLink />
      </Wrapper>
    </>
  );
};
