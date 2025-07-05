import {ReactComponent as SearchIcon} from "./icon/search.svg";
import {ReactComponent as UserIcon} from "./icon/user.svg";
import {ReactComponent as CartIcon} from "./icon/shoping-cart.svg";
import {ReactComponent as HeartIcon} from "./icon/hearth.svg";
import { toLogin } from "../../../namePlate";
import { styledIcon } from "./styled";



export const socials = [
  {
    name: "search",
    Icon: styledIcon(SearchIcon),
    to: "/search",
  }
  ,{
    name: "user",
    Icon: styledIcon(UserIcon),
    to: toLogin(),
  }
  ,{
    name: "favorite",
    Icon: styledIcon(HeartIcon),
    to: "/wishlist",
  },
    {
    name: "cart",
    Icon: styledIcon(CartIcon),
    to: "/cart",
  }
]