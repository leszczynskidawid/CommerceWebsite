import {
  NavbarContainer,
  LeftIconsMenuContainer,
  RigthLogoContainer,
  CenterMenuItemsContainer,
} from "./style";
import { useState, useEffect } from "react";
import { NavLinkMenu } from "../NavLinkMenu";
import { CustomizedBadges } from "../../assets/Icons/BasketIcon";

export const Nav = () => {
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <NavbarContainer className={active ? "active" : ""}>
      <LeftIconsMenuContainer>e-Commerce</LeftIconsMenuContainer>
      <CenterMenuItemsContainer>
        <NavLinkMenu path={"/"} name={"products"} />
        <NavLinkMenu path={"/"} name={"contact"} />
        <NavLinkMenu path={"/"} name={" about me"} />
      </CenterMenuItemsContainer>
      <RigthLogoContainer>
        <CustomizedBadges />
      </RigthLogoContainer>
    </NavbarContainer>
  );
};
