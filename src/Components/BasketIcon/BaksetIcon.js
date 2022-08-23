import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge } from "@mui/material";
export const BasketIcon = ({ badgeContent }) => {
  return (
    <Badge badgeContent={badgeContent}>
      <ShoppingBasketIcon />
    </Badge>
  );
};
