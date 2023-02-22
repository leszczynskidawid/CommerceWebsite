import { TitleH1Text } from "../TitleText";
import StoreIcon from "@mui/icons-material/Store";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import PsychologyIcon from "@mui/icons-material/Psychology";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import styled from "styled-components";

export const AboutUsContent = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    margin-top: 100px;
  `;
  const InfoSection = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `;
  const CardInInfoSection = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.rowDirection ? "column" : "row")};
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    text-align: ${(props) => (props.rowDirection ? "center" : "left")}; ;
  `;
  const SIconContainer = styled.div`
    & > svg {
      font-size: 5rem;
      margin: 10px;
    }
  `;

  const cardsContentList = [
    {
      id: 1,
      icon: <StoreIcon />,
      tittle: "Sklepów w polsce",
      qty: "1",
    },
    {
      id: 2,
      icon: <PeopleAltIcon />,
      tittle: "Zatrudnionych pracowników",
      qty: "900",
    },
    {
      id: 3,
      icon: <ShoppingBasketIcon />,
      tittle: "oferowanych produktów",
      qty: "+10000",
    },
    {
      id: 4,
      icon: <LocalOfferIcon />,
      tittle: "Sprzedanych produktów",
      qty: "+99999",
    },
  ];
  const sectionWhyUsConent = [
    {
      id: 1,
      icon: <ThumbUpAltIcon />,
      tittle: "Najważniejsza jest Twoja satysfakcja ",
      text: "To Ty jeswn printer took a galley of type a  of type and scrambled dsdasdasdasd dasdasdasldassld s kajdlaksjdlak  kdjalkdjasldal d aslkdjasldjasd  lksdjaslkdj ldjas kjdaslkd jalsdj laksjd alkjdl asjdasljd alsdja';dja['s djadja ljas'd jad jasl;dj alskj dals dj] ",
    },
    {
      id: 2,
      icon: <PsychologyIcon />,
      tittle: "Stawiamy na wiedzę i umiejętności ",
      text: "To Ty jeswn printer took a galley of type a  of type and scrambled dsdasdasdasd dasdasdasldassld s kajdlaksjdlak  kdjalkdjasldal d aslkdjasldjasd  lksdjaslkdj ldjas kjdaslkd jalsdj laksjd alkjdl asjdasljd alsdja';dja['s djadja ljas'd jad jasl;dj alskj dals dj] ",
    },
    {
      id: 3,
      icon: <CheckroomIcon />,
      tittle: "Topowe ceny i spektrum wyboru  ",
      text: "To Ty jeswn printer took a galley of type a  of type and scrambled dsdasdasdasd dasdasdasldassld s kajdlaksjdlak  kdjalkdjasldal d aslkdjasldjasd  lksdjaslkdj ldjas kjdaslkd jalsdj laksjd alkjdl asjdasljd alsdja';dja['s djadja ljas'd jad jasl;dj alskj dals dj] ",
    },
  ];
  return (
    <Wrapper>
      <TitleH1Text text={"O nas "} />
      <section>
        <p>
          rem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been thes standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishin
        </p>
        <InfoSection>
          {cardsContentList.map((itemContetCard) => (
            <CardInInfoSection key={itemContetCard.id} rowDirection>
              <SIconContainer>{itemContetCard.icon}</SIconContainer>
              <p>{itemContetCard.qty}</p>
              <span>{itemContetCard.tittle}</span>
            </CardInInfoSection>
          ))}
        </InfoSection>
      </section>
      <TitleH1Text text={"Dlaczrgo my"} />

      <section>
        <p>
          Od 18 lat doradzamy w wyborze najlepszych rozwiązań. Do tej pory
          zapracowaliśmy na zaufanie setek tysięcy Klientów, a ich liczba ciągle
          rośnie
        </p>

        {sectionWhyUsConent.map((itemSection) => (
          <CardInInfoSection key={itemSection.id}>
            <SIconContainer>{itemSection.icon}</SIconContainer>
            <div>
              <h4>{itemSection.tittle}</h4>
              <p>{itemSection.text}</p>
            </div>
          </CardInInfoSection>
        ))}
      </section>
    </Wrapper>
  );
};
