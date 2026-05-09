import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "@emotion/styled";
import { css } from "@emotion/react";

const fadeIn = css`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const PhotoWithHeader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const targetDate = new Date("2026-08-21T00:18:00Z");
  
    const getTimeLeft = (target) => {
      const now = new Date().getTime();
      const difference = target - now;
  
      if (difference <= 0) {
        return { total: 0, days: 0, hours: 0, minutes: 0,};
      }
  
      return {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      };
    };
  
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
    const [prevSeconds, setPrevSeconds] = useState(null);
    const [flipping, setFlipping] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const newTimeLeft = getTimeLeft(targetDate);
  
        if (prevSeconds !== null && newTimeLeft.seconds !== prevSeconds) {
          setFlipping(true);
          setTimeout(() => setFlipping(false), 400);
        }
  
        setPrevSeconds(newTimeLeft.seconds);
        setTimeLeft(newTimeLeft);
  
        if (newTimeLeft.total <= 0) {
          clearInterval(interval);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [prevSeconds]);
  
    const units = [
      { value: timeLeft.days, label: "күн" },
      { value: timeLeft.hours, label: "сағат" },
      { value: timeLeft.minutes, label: "минут" },
    ];

  return (
    <ContentWrapper>
      <Overlay/>
      <MainTitleIfno loaded={loaded}>ТОЙҒА ШАҚЫРУ</MainTitleIfno>
      <MainTitleName loaded={loaded}>Сұлтан & Үміт</MainTitleName>
      <Divider loaded={loaded} />
      <MainTitleDate loaded={loaded}>2026 жыл, 21 тамыз</MainTitleDate>
      <ScrollHint loaded={loaded}>↓</ScrollHint>
      <GlassCard>
              <MainTitleName2>Той салтанатына дейін:</MainTitleName2>
              <TimerWrapper>
                {units.map((unit, i) => (
                  <React.Fragment key={unit.label}>
                    <UnitBlock>
                      <NumberBox flipping={i === 3 && flipping}>
                        <TitleNumber>
                          {String(unit.value).padStart(2, "0")}
                        </TitleNumber>
                      </NumberBox>
                      <TitleInfo>{unit.label}</TitleInfo>
                    </UnitBlock>
                    {i < 3 && <Separator>:</Separator>}
                  </React.Fragment>
                ))}
              </TimerWrapper>
            </GlassCard>

    </ContentWrapper>
  );
};

export default PhotoWithHeader;

const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 425px) {
    background: url(${require("../img/MainPhoto.png")});
    background-repeat: no-repeat;
    height: 690px;
    width: 100%;
    background-size: 100%;
    background-position: center;
  }
  @media (max-width: 375px) {
    background-size: 100% !important;
    height: 580px;
  }
  @media (max-width: 320px) {
    height: 520px;
  }
`;

const Overlay = styled.div`
 background-color: #110b02;
        background-size: cover;
        opacity: 0.7;
        z-index:2
`;

const TFirstLetter = styled.div`
  font-family: "GreatFont";
  position: absolute;
  z-index: 2;
  transition: opacity 1.2s ease, transform 1.2s ease;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? "translateY(0)" : "translateY(-30px)")};

  @media (max-width: 425px) {
    font-size: 72px;
    color: rgba(255, 255, 255, 0.92);
    margin-top: 28px;
    padding: 0 20px;
    text-shadow: 2px 4px 20px rgba(0,0,0,0.5);
  }
`;

const AFirstLetter = styled.div`
  font-family: "GreatFont";
  position: absolute;
  z-index: 2;
  transition: opacity 1.2s ease 0.2s, transform 1.2s ease 0.2s;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? "translateY(0)" : "translateY(-30px)")};

  @media (max-width: 425px) {
    font-size: 72px;
    color: rgba(255, 255, 255, 0.92);
    padding: 0 80px;
    margin-top: 96px;
    text-shadow: 2px 4px 20px rgba(0,0,0,0.5);
  }
`;

const MainTitleName = styled.div`
  font-family: "GreatFont";
  position: absolute;
  z-index: 2;
  width: 100%;
  text-align: center;
  letter-spacing: 3px;
  transition: opacity 1.4s ease 0.5s, transform 1.4s ease 0.5s;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? "translateY(0)" : "translateY(20px)")};

  @media (max-width: 425px) {
    font-size: 64px;
    color: #fff;
    margin-top: 60px;
    text-shadow: 1px 2px 12px rgba(0,0,0,0.6);
  }
  @media (max-width: 320px) {
    font-size: 24px;
    margin-top: 420px;
  }
`;

const Divider = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  background: rgba(255,255,255,0.6);
  transition: width 1.2s ease 0.9s, opacity 0.6s ease 0.9s;
  width: ${({ loaded }) => (loaded ? "140px" : "0px")};
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};

  @media (max-width: 425px) {
    margin-top: 130px;
  }
  @media (max-width: 320px) {
    margin-top: 454px;
  }
`;

const MainTitleDate = styled.div`
  position: absolute;
  z-index: 2;
  font-family: "Romulc", Arial, sans-serif;
  width: 100%;
  text-align: center;
  letter-spacing: 4px;
  transition: opacity 1.4s ease 0.8s, transform 1.4s ease 0.8s;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? "translateY(0)" : "translateY(20px)")};

  @media (max-width: 425px) {
    font-size: 10px;
    font-weight: 200;
    color: rgba(255,255,255,0.85);
    margin-top: 146px;
    text-shadow: 1px 2px 8px rgba(0,0,0,0.5);
  }
  @media (max-width: 320px) {
    font-size: 20px;
    margin-top: 465px;
  }
`;
const MainTitleIfno = styled.div`
  position: absolute;
  z-index: 2;
  font-family: "Romulc", Arial, sans-serif;
  width: 100%;
  text-align: center;
  letter-spacing: 4px;
  transition: opacity 1.4s ease 0.8s, transform 1.4s ease 0.8s;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transform: ${({ loaded }) => (loaded ? "translateY(0)" : "translateY(20px)")};

  @media (max-width: 425px) {
    font-size: 12px;
    font-weight: 200;
    color: rgba(255,255,255,1);
    margin-top: 60px;
    text-shadow: 1px 2px 8px rgba(0,0,0,0.5);
  }
  @media (max-width: 320px) {
    font-size: 20px;
    margin-top: 465px;
  }
`;

const ScrollHint = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  text-align: center;
  color: rgba(255,255,255,0.7);
  font-size: 24px;
  transition: opacity 1s ease 1.5s;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  animation: floatUpDown 2s ease-in-out infinite;

  @keyframes floatUpDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  @media (max-width: 425px) {
    bottom: 10px;
  }
`;
const GlassCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 40px 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
  margin: 400px 16px;
  animation: fadeInUp 1s ease both;


  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const MainTitleName2 = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  
`;

const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
`;

const UnitBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const NumberBox = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  padding: 12px 16px;
  min-width: 60px;
  text-align: center;
  animation: ${({ flipping }) => flipping ? "flipAnim 0.4s ease" : "none"};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  @keyframes flipAnim {
    0% { transform: rotateX(0deg); }
    50% { transform: rotateX(90deg); background: rgba(255,255,255,0.25); }
    100% { transform: rotateX(0deg); }
  }

  @media (max-width: 375px) {
    min-width: 50px;
    padding: 10px 12px;
  }
  @media (max-width: 320px) {
    min-width: 42px;
    padding: 8px 10px;
  }
`;

const TitleNumber = styled.div`
  color: #fff;
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: 375px) {
    font-size: 26px;
  }
  @media (max-width: 320px) {
    font-size: 22px;
  }
`;

const TitleInfo = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 13px;
  font-weight: 300;
  text-align: center;

  @media (max-width: 320px) {
    font-size: 11px;
  }
`;

const Separator = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 24px;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 0.2; }
  }
`;
