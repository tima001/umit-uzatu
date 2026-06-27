import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import HeroPhoto from "../img/hero-photo.webp";
import ArcLine from "../img/arc-line.png";
import BellIcon from "../img/bell-icon.webp";

const pulse = keyframes`
  0%{box-shadow:0 0 0 0 rgba(200,176,109,.4)}
  70%{box-shadow:0 0 0 10px rgba(200,176,109,0)}
  100%{box-shadow:0 0 0 0 rgba(200,176,109,0)}
`;

export default function PhotoWithHeader({ isMuted, onToggle }) {
  return (
    <Hero>
      <PhotoBox>
        <Photo src={HeroPhoto} alt="" />
        <Arc src={ArcLine} alt="" />
        <MusicCircle onClick={onToggle} playing={isMuted ? 0 : 1}>
          {isMuted ? "▶" : "❙❙"}
        </MusicCircle>
      </PhotoBox>

      <NameBlock>
        <Name>Үміт</Name>
      <Subtitle>QYZ UZATU</Subtitle>
      </NameBlock>
        <Bell1 src={BellIcon} alt="" flip={1} />
        <Bell2 src={BellIcon} alt="" />

    </Hero>
  );
}

const Hero = styled.div`
  background: #fffbec;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom:50px;
`;

const PhotoBox = styled.div`
  position: relative;
  width: 100%;
`;

const Photo = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 2/3;
  object-fit: cover;
`;

const Arc = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
`;

const MusicCircle = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #cdad56;
  background: rgba(255, 255, 255, 0.65);
  color: #84744b;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${(p) => (p.playing ? `${pulse} 2s ease-in-out infinite` : "none")};
`;

const NameBlock = styled.div`
position:absolute;
display flex;
align-items: center;
justify-content: center;
bottom:160px;
@media (max-width: 415px) {
bottom:90px;
  }
@media (max-width: 340px) {
bottom:250px;
  }
@media (max-width: 310px) {
bottom:290px;
  }
`;

const Bell1 = styled.img`
position: absolute;
  width: 76px;
  opacity: 0.9;
  bottom:110px;
  right:-10px;
  bottom:110px;

  @media (max-width: 415px) {
bottom:40px;
  }
@media (max-width: 340px) {
bottom:200px;
  }
@media (max-width: 310px) {
bottom:240px;
  }
`;
const Bell2 = styled.img`
position: absolute;
  width: 76px;
  opacity: 0.9;
  left:30px;
bottom:240px;

  @media (max-width: 415px) {
bottom:150px;
  }
@media (max-width: 340px) {
bottom:330px;
  }
@media (max-width: 310px) {
bottom:360px;
  }
`;

const Name = styled.div`
  font-family: "miama", cursive;
  font-size: 60px;
  color: #84744b;
  line-height: 1;
  text-align:center;
`;

const Subtitle = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 700;
  font-size: clamp(22px, 7vw, 32px);
  letter-spacing: 6px;
  color: #c8b06d;
  text-align: center;
  padding-bottom: 6px;
  text-align:center;

`;
