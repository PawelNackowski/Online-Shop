import { Link, ListItem, StyledList } from "./styled";

export const Navigation = () => {
  return (
    <nav>
      <StyledList>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/products">Products</Link>
        </ListItem>
        <ListItem>
          <Link to="/about">About Us</Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">Contact</Link>
        </ListItem>
      </StyledList>
    </nav>
  );
};
