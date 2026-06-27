import React from "react";
import styled from "@emotion/styled";
import FloralA from "../img/floral-a.webp";
import FloralB from "../img/floral-b.webp";
import FrameImg from "../img/рамка-кроп.png";

export default function OvalCard({ children, flip }) {
  return (
    <Outer>
      <Frame>
        <CornerTop src={flip ? FloralB : FloralA} alt="" />
        {children}
        <CornerBottom src={flip ? FloralA : FloralB} alt="" />
      </Frame>
    </Outer>
  );
}

const Outer = styled.div`
  position: relative;
  width: 100%;
  padding: 30px 26px;
  display: flex;
  justify-content: center;
  @media (max-width: 350px) {
    padding: 30px 0;
    gap: 12px;
  }
`;

const Frame = styled.div`
  position: relative;
  width: 100%;
  max-width: 330px;
  background-image: url(${FrameImg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 96px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  
`;

const CornerTop = styled.img`
  position: absolute;
  top: -61px;
  left: -50px;
  width: 160px;
  z-index: 2;
  pointer-events: none;
`;

const CornerBottom = styled.img`
  position: absolute;
  bottom: -24px;
  right: -56px;
  width: 160px;
  z-index: 2;
  pointer-events: none;
`;
