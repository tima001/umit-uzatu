import React from "react";
import styled from "@emotion/styled";

import PhotoWithHeader from "./pages/PhotoWithHeader";
import OvalCard from "./pages/OvalCard";
import InvitationText from "./pages/InvitationText";
import Calendar from "./pages/Calendar";
import CountdownBand from "./pages/CountdownBand";
import InformationText from "./pages/InformationText";
import RestaurantPhotos from "./pages/RestaurantPhotos";
import FormContent from "./pages/FormContent";
import Wishes from "./pages/Wishes";
import InfoTimeLine from "./pages/InfoTimeLine";
import Reveal from "./pages/Reveal";
import ClosingPhoto from "./img/closing-photo.webp";
import HeartIcon from "./img/heart-icon.webp";

export default function Components({ isMuted, onToggle }) {
  return (
    <Page>
      <PhotoWithHeader isMuted={isMuted} onToggle={onToggle} />

      <Reveal>
        <OvalCard>
          <InvitationText />
        </OvalCard>
      </Reveal>

      <Reveal><Calendar /></Reveal>

      <Reveal><CountdownBand /></Reveal>

      <Reveal>
        <OvalCard flip>
          <InformationText />
        </OvalCard>
      </Reveal>

      <Reveal><RestaurantPhotos /></Reveal>

      <Reveal><FormContent /></Reveal>

      <Divider><img src={HeartIcon} alt="" style={{ width: 36, opacity: 0.7 }} /></Divider>

      <Reveal><Wishes /></Reveal>


      <Reveal>
        <Closing>
          <CloseTitle>Той иелері:</CloseTitle>
          <CloseSub>Бахытжан мен Жанар</CloseSub>

        </Closing>
      </Reveal>
        <Photo src={ClosingPhoto} alt="" />

    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fffbec;
`;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px 0 8px;
  background: #fffbec;
`;

const Closing = styled.div`
  background: #fffbec;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 20px 60px;
  text-align: center;
`;

const CloseTitle = styled.div`
  font-family: "bika", cursive;
  font-size: 54px;
  color: #84744b;
`;

const CloseSub = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 400;
  font-size: 19px;
  color: #a1916f;
`;


const Photo = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
`;
