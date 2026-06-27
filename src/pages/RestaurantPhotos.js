import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import PhotoExterior from "../img/qobyz photo/SaveClip.App_661724172_1277062230439500_7119331622540179883_n.jpg";
import PhotoInterior1 from "../img/qobyz photo/SaveClip.App_625351224_18036381701777571_8620385735909942911_n.jpg";
import PhotoInterior2 from "../img/qobyz photo/SaveClip.App_625843776_18036381830777571_4535146886944735304_n.jpg";
import PhotoInterior3 from "../img/qobyz photo/SaveClip.App_625988988_18036346982777571_1276677898327981394_n.jpg";
import PhotoInterior4 from "../img/qobyz photo/SaveClip.App_626263748_18036346853777571_8208607543179336022_n.jpg";

const slides = [
  { src: PhotoExterior, alt: "Qobyz Ballroom" },
  { src: PhotoInterior1, alt: "Qobyz Ballroom interior" },
  { src: PhotoInterior2, alt: "Qobyz Ballroom interior" },
  { src: PhotoInterior3, alt: "Qobyz Ballroom interior" },
  { src: PhotoInterior4, alt: "Qobyz Ballroom interior" },
];

const loop = [...slides, ...slides];

export default function RestaurantPhotos() {
  return (
    <Wrap>
      <Track>
        <Strip>
          {loop.map((s, i) => (
            <Card key={i}>
              <Photo src={s.src} alt={s.alt} />
              {/* <Caption>{s.caption}</Caption> */}
            </Card>
          ))}
        </Strip>
      </Track>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Track = styled.div`
  overflow: hidden;
  width: 100%;
  margin:24px 0;
`;

const Strip = styled.div`
  display: flex;
  gap: 16px;
  width: max-content;
  animation: ${scroll} 12s linear infinite;
`;

const Card = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 280px;
  height: 200px;
  overflow: hidden;
  border-radius: 16px;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
