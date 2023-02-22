import { NavLinkMenu } from "../NavLinkMenu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Wrapper, StyledIconContainer, StyledUl } from "./style";

export const WrapperMenuFooter = ({ data, title, handletoggle, toggle }) => {
  return (
    <Wrapper onClick={handletoggle}>
      <div>
        <h3>{title}</h3>
      </div>
      <StyledUl toggle={toggle}>
        {data?.map((menu) => (
          <NavLinkMenu
            key={menu.name}
            path={menu.path}
            name={menu.name}
            padding={"padding"}
            bold={"bold"}
          />
        ))}
      </StyledUl>
      <StyledIconContainer toggle={toggle}>
        <ExpandMoreIcon />
      </StyledIconContainer>
    </Wrapper>
  );
};
