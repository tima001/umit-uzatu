import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import WavyBg from "../img/wavy-bg.webp";

const TARGET = new Date("2026-08-19T13:00:00Z");

const getLeft = () => {
  const d = TARGET.getTime() - Date.now();
  if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    minutes: Math.floor((d % 3600000) / 60000),
    seconds: Math.floor((d % 60000) / 1000),
    over: false,
  };
};

export default function CountdownBand() {
  const [tl, setTl] = useState(getLeft());

  useEffect(() => {
    const iv = setInterval(() => setTl(getLeft()), 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <Wrap>
      <TimeBadge>БАСТАЛУЫ&nbsp;&nbsp;<b>18:00</b></TimeBadge>

      <Wave src={WavyBg} alt="" />

      <Inner>
        <DateText>Қыз ұзатуға дейін:</DateText>
        {tl.over ? (
          <Started>ОҚИҒА БАСТАЛДЫ!</Started>
        ) : (
          <Units>
            <Unit><UVal>{tl.days}</UVal><ULbl>күн</ULbl></Unit>
            <Unit><UVal>{tl.hours}</UVal><ULbl>сағ</ULbl></Unit>
            <Unit><UVal>{tl.minutes}</UVal><ULbl>мин</ULbl></Unit>
            <Unit><UVal>{tl.seconds}</UVal><ULbl>сек</ULbl></Unit>
          </Units>
        )}
      </Inner>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const TimeBadge = styled.div`
  position: relative;
  z-index: 2;
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 2px;
  color: #84744b;
  background: #fffdf7;
  border: 1.5px solid #cdad56;
  border-radius: 50px;
  padding: 10px 26px;
  margin-bottom: -14px;
  b { font-weight: 700; }
`;

const Wave = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: top;
  display: block;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 130%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

const Units = styled.div`
  display: flex;
  gap: 22px;
`;

const Unit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const UVal = styled.div`
  font-family: "display", cursive;
  font-size: 42px;
  color: #5c4a2a;
  line-height: 1;
`;

const ULbl = styled.div`
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #6b5635;
`;

const Started = styled.div`
  font-family: "KZPFMonumentaPro";
  font-size: 20px;
  color: #5c4a2a;
`;
const DateText = styled.div`
  font-family: "Bika";
  font-size: 40px;
  color: #5c4a2a;
`;
