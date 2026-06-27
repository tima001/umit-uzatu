import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import OrnamentCircle from "../img/ornament-circle.webp";

const spin = keyframes`from{transform:rotate(0)}to{transform:rotate(360deg)}`;

const PROG = [
  { t: "18:00", l: "қонақтардың жиналуы" },
  { t: "18:30", l: "беташар" },
  { t: "19:00", l: "тойдың басталуы" },
  { t: "20:00", l: "ән-би, ойын-сауық" },
  { t: "21:00", l: "ата-анадан бата" },
  { t: "22:00", l: "тойдың аяқталуы" },
];

export default function InfoTimeLine() {
  return (
    <Wrap>
      <BgOrn src={OrnamentCircle} alt="" />

      <Title>Той бағдарламасы:</Title>

      <ProgList>
        {PROG.map((item, i) => (
          <ProgItem key={i}>
            <ProgTime>{item.t}</ProgTime>
            <ProgLabel>{item.l}</ProgLabel>
          </ProgItem>
        ))}
      </ProgList>
    </Wrap>
  );
}

const Wrap = styled.div`
  background: #fffbec;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 48px 24px;
  position: relative;
  overflow: hidden;
`;

const BgOrn = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  opacity: 0.35;
  pointer-events: none;
  animation: ${spin} 60s linear infinite;
`;

const Title = styled.div`
  font-family: "accent", cursive;
  font-size: 34px;
  color: #84744b;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const ProgList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 300px;
  position: relative;
  z-index: 1;
`;

const ProgItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(132, 116, 75, 0.15);
  &:last-child { border-bottom: none; }
`;

const ProgTime = styled.div`
  font-family: "body", Arial, sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #84744b;
  min-width: 48px;
`;

const ProgLabel = styled.div`
  font-family: "body", Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #6b5d44;
  line-height: 1.3;
`;
