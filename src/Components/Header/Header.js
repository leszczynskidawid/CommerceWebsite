import { StyledHeaderContainer } from "./style";
import image from "../../assets/Icons/header__back.jpg";
import { Navbar } from "../Navbar/Navbar";
export const Header = () => {
  return (
    <>
      <StyledHeaderContainer backgroundImage={image}>
        <Navbar />
      </StyledHeaderContainer>
    </>
  );
};
