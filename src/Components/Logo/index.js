import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SLogo = styled.div`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
`;
export const Logo = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
    location.reload();
  };

  return <SLogo onClick={() => handleOnClick()}>Logo</SLogo>;
};
