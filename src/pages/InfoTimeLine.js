import React from "react";
import styled from "@emotion/styled";
import TimelineSvg from "../img/timeline.svg";
import OrnamentSvg from "../img/ornament.svg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const InfoTimeLine = () => {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <TimelineWrapper ref={ref} visible={visible}>
      {/* Top-right ornament */}
      <OrnamentTopRight src={OrnamentSvg} aria-hidden="true" />
      {/* Top-left ornament */}
      <OrnamentTopLeft src={OrnamentSvg} aria-hidden="true" />

      <TitleText>Той бағдарламасы</TitleText>
      <SubText>Сізді күтетін оқиғалар</SubText>
      <TimelineImg src={TimelineSvg} alt="Той бағдарламасы" />
    </TimelineWrapper>
  );
};

export default InfoTimeLine;

const TimelineWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(40px)")};
  transition: opacity 1s ease, transform 1s ease;
`;

const OrnamentBase = styled.img`
  position: absolute;
  width: 180px;
  height: 180px;
  opacity: 0.08;
  pointer-events: none;
  user-select: none;
  animation: spinOrnament 20s linear infinite;

  @keyframes spinOrnament {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  @media (max-width: 375px) {
    width: 140px;
    height: 140px;
  }
`;

const OrnamentTopRight = styled(OrnamentBase)`
  top: 40px;
  right: -100px;
`;

const OrnamentTopLeft = styled(OrnamentBase)`
  bottom: 130px;
  left: -110px;
`;

const TitleText = styled.div`
  font-family: "GreatFont";
  font-size: 48px;
  color: #3d1a18;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 320px) {
    font-size: 32px;
  }
`;

const SubText = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 16px;
  font-weight: 200;
  color: #888;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const TimelineImg = styled.img`
  width: 100%;
  max-width: 380px;
  display: block;
  position: relative;
  z-index: 1;
  animation: fadeInScale 1.2s ease both;

  @keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;
