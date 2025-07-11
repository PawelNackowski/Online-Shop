import { ReactComponent as SearchIcon } from "./icon/search.svg";
import { ReactComponent as UserIcon } from "./icon/user.svg";
import { ReactComponent as CartIcon } from "./icon/shopping-cart.svg";
import { ReactComponent as HeartIcon } from "./icon/favorite.svg";
import { toLogin } from "../../../namePlate";
import { styledIcon } from "./styled";

export const socials = [
  {
    name: "search",
    Icon: styledIcon(SearchIcon),
    to: "/search",
    iconProps: {
      iconName: "search",
    },
  },
  {
    name: "user",
    Icon: styledIcon(UserIcon),
    to: toLogin(),
    iconProps: {
      iconName: "user",
    },
  },
  {
    name: "favorite",
    Icon: styledIcon(HeartIcon),
    to: "/wishlist",
    iconProps: {
      iconName: "favorite",
    },
  },
  {
    name: "cart",
    Icon: styledIcon(CartIcon),
    to: "/cart",
    iconProps: {
      iconName: "cart",
    },
  },
];
