import React from "react";
import styled from "@emotion/styled";
import CalendarSvg from "../img/calendar.svg";
import CircleSvg from "../img/circle.svg";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Calendar = () => {
  const [ref, visible] = useScrollAnimation({ threshold: 0.15 });
  const [circleRef, circleVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <CalendarWrapper ref={ref} visible={visible}>
      <TitleText>Той салтанаты:</TitleText>
      <DateLabel>21 тамыз 2026 ж.<br/> Басталу уақыты:<u>18:00</u> </DateLabel>

      <CalendarContainer>
        <CalendarImg src={CalendarSvg} alt="Той күнтізбесі" />
        {/* Circle spins on top of "21" — August 2025: Thursday, row 4 */}
        <CircleOverlay ref={circleRef} visible={circleVisible}>
          <CircleImg src={CircleSvg} alt="" />
        </CircleOverlay>
      </CalendarContainer>

    </CalendarWrapper>
  );
};

export default Calendar;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  padding: 0 16px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(40px)")};
  transition: opacity 1s ease, transform 1s ease;
`;

const TitleText = styled.div`
  font-family: "GreatFont";
  font-size: 52px;
  color: #aa915d;;
  letter-spacing: 2px;
  text-align: center;
  line-height: 40%;

  @media (max-width: 320px) {
    font-size: 32px;
  }
`;

const CalendarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
`;

const CalendarImg = styled.img`
  width: 100%;
  display: block;
`;

/* 
  August 2025:
  Mon Tue Wed Thu Fri Sat Sun
  ...
  18  19  20  [21] 22  23  24
  
  viewBox: 386.48 x 290.04
  7 columns, "21" is Thursday = column index 3 (0-based)
  Row 4 of dates (0-based index 3)

  left = (3 + 0.5) / 7 = 50.0% of calendar width (center of Th column)
  top = ~71% of calendar height (row 4 center)
  
  Circle width ≈ 1 column = 14% of calendar width
  We subtract half the circle size to center it:
  left = 50% - 7% = 43%
  top = 71% - 7% = 64%
*/
const CircleOverlay = styled.div`
  position: absolute;
  left: 57.5%;
  top: 64%;
  width: 14%;
  aspect-ratio: 1;
  z-index: 2;
  pointer-events: none;

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? "scale(1)" : "scale(0.3)"};
  transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;

  img {
    animation: spinSlow 10s linear infinite;
  }

  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const CircleImg = styled.img`
  width: 100%;
  height: 100%;
`;

const DateLabel = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  letter-spacing: 1px;
`;
