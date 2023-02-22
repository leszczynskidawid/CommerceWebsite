import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { NavbarMenuList } from "../NavBarMenuList/NavbarMenuList";
import { Logo } from "../Logo";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`nav-container ${scrollPosition > 50 ? "active" : ""} `}>
      <Logo />
      <button onClick={() => setOpen(!open)}>
        {!open ? <MenuIcon className="icon-menu" /> : <CloseIcon />}
      </button>

      <NavbarMenuList className={`${open ? "open" : ""}`} />
    </nav>
  );
};
