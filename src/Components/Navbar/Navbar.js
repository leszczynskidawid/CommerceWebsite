import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { NavLinkMenu } from "../NavLinkMenu";
import { BasketIcon } from "../BasketIcon/BaksetIcon";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const { cartQty } = useSelector((state) => state.cart);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav className={`nav-container ${scrollPosition > 50 ? "active" : ""} `}>
      <div style={{ fontSize: "40px", fontWeight: "bold" }}>logo</div>
      <button onClick={() => setOpen(!open)}>
        {!open ? <MenuIcon className="icon-menu" /> : <CloseIcon />}
      </button>

      <ul className={`nav-menu ${open ? "active" : ""}`}>
        <NavLinkMenu path={"/"} name={"products"} />
        <NavLinkMenu path={"/a"} name={"contact"} />
        <NavLinkMenu path={"/card"} name={" about me"} />
        <NavLinkMenu
          path="/card"
          name={<BasketIcon badgeContent={cartQty} />}
        />
      </ul>
    </nav>
  );
};
