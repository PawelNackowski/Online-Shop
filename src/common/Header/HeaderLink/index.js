import { socials } from "./socials";
import { StyledList } from "./styled";

export const HeaderLink = () => {
  return (
    <StyledList>
      {socials.map(({ name, to, Icon, iconProps }) => (
        <a 
          key={name} 
          href={to} 
          title={name}>
            <Icon {...iconProps} />
        </a>
      ))}
    </StyledList>
  );
};
