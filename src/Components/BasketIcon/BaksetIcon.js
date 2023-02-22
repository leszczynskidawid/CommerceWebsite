import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
export const BasketIcon = () => {
  const { cartQty } = useSelector((state) => state.cart);
  return (
    <Badge badgeContent={cartQty}>
      <ShoppingBasketIcon />
    </Badge>
  );
};
