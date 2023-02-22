import styled from "styled-components";
import { ContactForm } from "../ContactForm";
import { TitleH1Text } from "../TitleText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  margin-top: 100px;
`;
const SInfoScection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const SInforCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const SIFrame = styled.iframe`
  min-height: 40vh;
  width: 50%;
  margin: auto;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ContactConent = () => {
  return (
    <Wrapper>
      <TitleH1Text text={"Kontakty i sklep"} />
      <SInfoScection>
        <SInforCard>
          <h4>Sklep internetowy</h4>
          <span>logo.marka@.pl</span>
          <span>logo.marka@.pl</span>
        </SInforCard>

        <SInforCard>
          <h4>Centrala</h4>
          <span>+98 456 212 21</span>
          <span>123 1232 213</span>
        </SInforCard>

        <SInforCard>
          <h4>Czat z doradca</h4>
          <span>logo.marka@.pl</span>
          <span>logo.marka@.pl</span>
        </SInforCard>

        <SInforCard>
          <h4> Adres centrali</h4>
          <span>Wigury 3/1</span>
          <span>45-TUW Hull City</span>
        </SInforCard>
      </SInfoScection>
      <TitleH1Text text={"Nasz sklep"} />
      <SIFrame src="https://maps.google.com/maps?q=52.5047051,19.6541677&h1=es;&output=embed" />
      <TitleH1Text text={"Skontaktuj sie z nami "} />
      <ContactForm />
    </Wrapper>
  );
};
