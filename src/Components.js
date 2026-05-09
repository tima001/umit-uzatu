import "./App.css";
import PhotoWithHeader from "./pages/PhotoWithHeader";
import InformationText from "./pages/InformationText";
import RoadMapContent from "./pages/RoadMapContent";
import InvitationText from "./pages/InvitationText";
import InfoTimeLine from "./pages/InfoTimeLine";
import FormContent from "./pages/FormContent";
import Calendar from "./pages/Calendar";
import styled from "@emotion/styled";
import line from "./img/LineBg.png";
import YurtaImg from "../src/img/yurta.jpg"
import LineSvg from "../src/img/line.svg"
import OrnamentSvg from "../src/img/ornament.svg"

function Components() {
  return (
    <ContentWrapper>
      <PhotoWithHeader />


      <Section delay="0s">
        <InvitationText />
      </Section>

      <img src={YurtaImg}  style={{ 
    height: '300px', 
    width: '100%', 
    objectFit: 'cover'
  }}/>


      <Section delay="0s">
        <Calendar />
      </Section>


      <Section delay="0.1s">
        <InformationText />
      </Section>


      <Section delay="0s">
        <RoadMapContent />
      </Section>
<LineBgWrapper>
        <MarqueeTrack>
          <MarqueeImg src={LineSvg} aria-hidden="true" />
          <MarqueeImg src={LineSvg} aria-hidden="true" />
          <MarqueeImg src={LineSvg} aria-hidden="true" />
        </MarqueeTrack>
      </LineBgWrapper>
      <Section delay="0s">
        <InfoTimeLine />
      </Section>

      <Section delay="0s">
        <FormContent />
      </Section>
<Section delay="0s">
      <BottomOrnamentRow>
        <TitleText>Қуанышымызға <br/> ортақ болыңыздар!</TitleText>
        <BottomOrnament src={OrnamentSvg} aria-hidden="true" />
      </BottomOrnamentRow>
      </Section>
      
    </ContentWrapper>
  );
}

export default Components;

const ContentWrapper = styled.div`
  position: relative;
  margin-top: -90px;        /* ← вместо top: -90px */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 48px;
  padding-bottom: 0;
  background-color: #faf8f5;
  background-repeat: repeat;
  background-size: cover;

  @media (max-width: 425px) {
    background-size: auto;
  }
`;

const BackgroundLine = styled.img`
  width: 100%;
`;


const Section = styled.div`
  animation: sectionFadeIn 0.8s ease ${({ delay }) => delay || "0s"} both;

  @keyframes sectionFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;


const LineBgWrapper = styled.div`
  width: 140%;
  overflow: hidden;
  opacity: 0.35;
  padding: 6px 0;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
`;

const MarqueeTrack = styled.div`
  display: flex;
  width: max-content;
  animation: marquee 18s linear infinite;

  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }
`;

const MarqueeImg = styled.img`
  height: 28px;
  width: auto;
  flex-shrink: 0;
  display: block;
`;

const BottomOrnament = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  bottom: -120px;   /* половина уходит вниз, но обрезается overflow:hidden */
  opacity: 0.18;
  animation: spinOrnamentBottom 22s linear infinite;

  @keyframes spinOrnamentBottom {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
`;
 
const BottomOrnamentRow = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 0;
  overflow: hidden;
  min-height: 180px;
`;

const TitleText = styled.div`
  font-family: "GreatFont";
  font-size: 54px;
  color: #000000;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  z-index: 1;
line-height: 90%;
  @media (max-width: 320px) {
    font-size: 32px;
  }
`;
 