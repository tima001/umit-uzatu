import React from "react";
import styled from "@emotion/styled";
import FloralLarge from "../img/floral-large.webp";

const DAYS = ["ДС", "СС", "СР", "БС", "ЖМ", "СБ", "ЖС"];
const TOTAL_DAYS = 31;
const FIRST_DAY = 5; // Aug 1 2026 = Saturday (0=Mon)
const WEDDING_DAY = 19;

function HeartIcon() {
  return (
    <HeartSvg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", overflow: "visible", pointerEvents: "none" }}
    >
      <path
        pathLength="1"
        d="M 50,90 C 49,89 6,65 6,34 C 6,16 21,6 35,10 C 43,12 48,20 50,30 C 52,20 57,12 65,10 C 79,6 94,16 94,34 C 94,65 51,89 50,90 Z"
        fill="none"
        stroke="#fdbd63"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        pathLength="1"
        d="M 49,86 C 48,85 9,62 10,36 C 11,20 24,11 36,15 C 42,17 46,22 49,28"
        fill="none"
        stroke="#fdbd63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        pathLength="1"
        d="M 51,29 C 54,21 59,13 68,12 C 78,11 88,18 90,30 C 91,36 90,42 87,48"
        fill="none"
        stroke="#fdbd63"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />
      <path
        pathLength="1"
        d="M 50,83 C 47,81 20,62 17,42"
        fill="none"
        stroke="#fdbd63"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        pathLength="1"
        d="M 55,78 C 62,73 72,65 80,55"
        fill="none"
        stroke="#fdbd63"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.4"
      />
    </HeartSvg>
  );
}

export default function Calendar() {
  const cells = [];
  for (let i = 0; i < FIRST_DAY; i++) cells.push(null);
  for (let d = 1; d <= TOTAL_DAYS; d++) cells.push(d);

  return (
    <Wrap>
      <Floral src={FloralLarge} alt="" />

      <DateLabel>Өткізілетін күні:</DateLabel>

      <MonthHeader>
        <MonthName>ТАМЫЗ</MonthName>
        <MonthYear>2026</MonthYear>
      </MonthHeader>

      <CalGrid>
        {DAYS.map((d) => (
          <DayHead key={d}>{d}</DayHead>
        ))}
        {cells.map((d, i) => (
          <DayCell key={i} highlight={d === WEDDING_DAY ? 1 : 0} empty={!d ? 1 : 0}>
            {d === WEDDING_DAY && <HeartBg><HeartIcon /></HeartBg>}
            <DayNum>{d || ""}</DayNum>
          </DayCell>
        ))}
      </CalGrid>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  background: #fffbec;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding: 12px 24px 56px;
  overflow: hidden;

  @media (max-width: 325px) {
    padding: 12px 8px 40px;
    gap: 12px;
  }
`;

const Floral = styled.img`
  position: absolute;
  top: 10%;
  left: -60px;
  width: 220px;
  opacity: 0.55;
  z-index: 0;
  pointer-events: none;
`;

const DateLabel = styled.div`
  position: relative;
  z-index: 1;
  font-family: "bika", Arial, sans-serif;
  font-size: clamp(30px, 9vw, 44px);
  color: #6b5d44;
  text-align: center;
`;

const MonthHeader = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: baseline;
  gap: 16px;
`;

const MonthName = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 700;
  font-size: clamp(18px, 5.5vw, 28px);
  letter-spacing: 6px;
  color: #84744b;
`;

const MonthYear = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 400;
  font-size: clamp(18px, 5.5vw, 28px);
  letter-spacing: 4px;
  color: #a1916f;
`;

const CalGrid = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  max-width: 380px;
  gap: 6px;

  @media (max-width: 325px) {
    gap: 3px;
  }
`;

const DayHead = styled.div`
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #a1916f;
  text-align: center;
  padding: 4px 0;
`;

const DayCell = styled.div`
  position: relative;
  font-family: "body", Arial, sans-serif;
  font-weight: ${(p) => (p.highlight ? 700 : 400)};
  font-size: 16px;
  color: ${(p) => (p.highlight ? "#84744b" : "#3a2a1a")};
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeartBg = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: heartbeat 1.1s ease-in-out infinite;
  transform-origin: center;

  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.18);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.12);
    }
    70% {
      transform: scale(1);
    }
  }
`;

const HeartSvg = styled.svg`
  width: 80%;
  height: 80%;
`;

const DayNum = styled.span`
  position: relative;
  z-index: 1;
`;
