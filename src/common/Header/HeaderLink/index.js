import { socials } from "./socials";
import { IconLink, StyledList } from "./styled";

export const HeaderLink = () => {
  return (
    <StyledList>
      {socials.map(({ name, to, Icon }) => (
        <IconLink
          key={name}
          href={to}
          title={name}
          rel="noopener noreferrer"
        >
          <Icon />
        </IconLink>
      ))}
    </StyledList>
  );
};
