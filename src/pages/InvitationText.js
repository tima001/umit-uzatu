import React from "react";
import styled from "@emotion/styled";
import flower from "../img/flower.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const InvitationText = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [flowerRef, flowerVisible] = useScrollAnimation({ threshold: 0.2 });
  const [textRef, textVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <TextContentWrapper>
    
      <TitleText ref={titleRef} visible={titleVisible}>
        Құрметті қонақтар!
      </TitleText>
  {/* <FlowerWrapper ref={flowerRef} visible={flowerVisible}>
        <FlowerImg src={flower} />
      </FlowerWrapper> */}
      

      <ContentText ref={textRef} visible={textVisible}>
        Сіздерді
        <NameText>Сұлтан мен Үміт</NameText>
       балаларымыздың шаңырақ көтеру тойына арналған салтанатты 
        <br />
Ақ дастарханымыздың қадірлі қонағы болуға шақырамыз!
      </ContentText>
      <TitleText2>Той иелері:</TitleText2>
        <TitleName>Абзал-Гульмира</TitleName>
    </TextContentWrapper>
  );
};

export default InvitationText

const TitleText2 = styled.div`
  align-items: center;
  text-align: center;
  width: 100%;
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  text-transform: uppercase;
  font-weight: 200;
`;


const TitleName = styled.div`
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: "GreatFont";
  font-size: 48px;
  letter-spacing: 2px;
  color: #aa915d;
  line-height: 60%;
`;
const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px 0;
`;

const TitleText = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  color: #aa915d;
  font-size: 19px;
  text-align: center;
  font-weight: 200;
  line-height: 1.7;
  text-transform: uppercase;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(30px)")};
  transition: opacity 0.9s ease, transform 0.9s ease;
`;

const FlowerWrapper = styled.div`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "scale(1) rotate(0deg)" : "scale(0.7) rotate(-15deg)")};
  transition: opacity 1s ease 0.2s, transform 1s ease 0.2s;

  &:hover img {
    animation: heartbeat 1.5s ease-in-out;
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.1); }
    28% { transform: scale(1); }
    42% { transform: scale(1.08); }
  }
`;

const FlowerImg = styled.img`
  width: 160px;
  display: block;
  animation: floatUpDown 4s ease-in-out infinite;

  @keyframes floatUpDown {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
  }
`;

const NameText = styled.div`
  font-family: "GreatFont";
  color: #aa915d;
  font-size: 48px;
  line-height: 120%;
  display: block;
  animation: shimmerText 4s ease-in-out infinite;
  text-transform: none;

  @keyframes shimmerText {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }

  @media (max-width: 320px) {
    font-size: 38px;
  }
`;

const ContentText = styled.h2`
  font-family: "BKANTKZ", Arial, sans-serif;
  line-height: 1.7;
  font-weight: 200;
  text-align: center;
  font-size: 18px;
  padding: 0 36px;
  text-transform: uppercase;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(30px)")};
  transition: opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s;

  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
