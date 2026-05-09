import React from "react";
import styled from "@emotion/styled";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const InformationText = () => {
  const [ref2, vis2] = useScrollAnimation({ threshold: 0.2 });

  return (
    <InformationTextWrapper>
      <TextContentWrapper ref={ref2} visible={vis2} delay="0.2s">
        <IconCircle>📍</IconCircle>
        <TitleText>Мекен жайымыз:</TitleText>
        <Separator />
        <ContentText>
          Тараз қаласы <br />
Проспект жамбыла 121а <br />
          <VenueName>"Baltash "</VenueName> рестораны
        </ContentText>
      </TextContentWrapper>
    </InformationTextWrapper>
  );
};

export default InformationText;

const IconCircle = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
  animation: floatUpDown 3s ease-in-out infinite;

  @keyframes floatUpDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 32px 24px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 32px rgba(161, 27, 20, 0.08);
  border: 1px solid rgba(161, 27, 20, 0.1);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)"};
  transition: opacity 0.9s ease ${({ delay }) => delay},
    transform 0.9s ease ${({ delay }) => delay};
`;

const Separator = styled.div`
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #aa915d, transparent);
  margin: 4px 0 8px;
`;

const TitleText = styled.h2`
  font-family: "GreatFont";
  font-size: 38px;
  letter-spacing: 2px;
  margin: 0;
  font-weight: 200;
  color: #3d1a18;

  @media (max-width: 320px) {
    font-size: 32px;
  }
`;

const ContentText = styled.h2`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 18px;
  line-height: 1.7;
  font-weight: 200;
  text-align: center;
  margin: 0;
`;

const VenueName = styled.span`
  font-family: "GreatFont";
  font-size: 42px;
  color: #aa915d;
  line-height: 80%;
`;

const InformationTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 16px;
`;
