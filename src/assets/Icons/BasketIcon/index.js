import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import IconButton from "@mui/material/IconButton";

export function CustomizedBadges() {
  return (
    <IconButton>
      <Badge badgeContent={4}>
        <ShoppingBasketIcon />
      </Badge>
    </IconButton>
  );
}
