import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import audioBubizainap from "../img/bubizainap-apasy.MP3";
import audioSandigul from "../img/sandigul-apan.MP3";
import audioDuisekul from "../img/duisekul-apasy.MP3";

const SEED = [
  { type: "text", name: "Әкесі", likes: 5, text: "Қызым, жаңа өміріңе ақ батамды беремін. Бақытты, қуанышты ғұмыр кешуіңді тілеймін!" },
  { type: "text", name: "Анасы", likes: 2, text: "Әкең екеуіміздің аялап өсірген қызғалдағымыз! Сыңарыңмен жұбың жазылмай, бақытты да тату-тәтті ғұмыр кешіңдер. Бақытты болыңдар!" },
  { type: "audio", name: "Дүйсекүл апасы", src: audioDuisekul },
  { type: "audio", name: "Бүбізәйнап апасы", src: audioBubizainap },
  { type: "audio", name: "Сәндігүл апасы", src: audioSandigul },
  { type: "text", name: "Айгерім әпкесі", likes: 4, text: "Бақытты бол сіңілім,Құтты болып қадамың.Жаңа өмірің бақ сыйлап,Құлпыра бер бағалым.Жолың болсын сіңілім," },
  { type: "text", name: "Гульзия жеңгесі", likes: 4, text: "Қыз мұраты кету деген, бүгін міне, өз ұясынан ұшқалы отырған қызымыз барған жерінде бақытты болсын!" },
];

export default function Wishes() {
  const scroller = useRef(null);
  const audioRefs = useRef([]);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = scroller.current;
    if (!el) return;
    const cardW = el.firstChild ? el.firstChild.offsetWidth + 12 : 1;
    setActive(Math.round(el.scrollLeft / cardW));
  };

  const onAudioPlay = (i) => {
    audioRefs.current.forEach((audio, j) => {
      if (audio && j !== i) audio.pause();
    });
    window.dispatchEvent(new CustomEvent("bgmusic-duck"));
  };

  const onAudioPause = () => {
    const anyPlaying = audioRefs.current.some((a) => a && !a.paused);
    if (!anyPlaying) window.dispatchEvent(new CustomEvent("bgmusic-restore"));
  };

  return (
    <Wrap>
      <Title>Ізгі тілектер:</Title>

      <Scroller ref={scroller} onScroll={onScroll}>
        {SEED.map((w, i) => (
          <Card key={i}>
            {w.type === "audio" ? (
              <>
                <AudioBadge>♪ дауыстық тілек</AudioBadge>
                <AudioPlayer
                  controls
                  src={w.src}
                  ref={(el) => (audioRefs.current[i] = el)}
                  onPlay={() => onAudioPlay(i)}
                  onPause={onAudioPause}
                />
              </>
            ) : (
              <>
                <LikeBadge>♥ {w.likes}</LikeBadge>
                <Quote>“</Quote>
                <WishText>{w.text}</WishText>
              </>
            )}
            <CardFoot>
              <Avatar>{w.name.charAt(0)}</Avatar>
              <div>
                <WName>{w.name}</WName>
              </div>
            </CardFoot>
          </Card>
        ))}
      </Scroller>

      <Dots>
        {SEED.map((_, i) => (
          <Dot key={i} active={i === active ? 1 : 0} />
        ))}
      </Dots>


    </Wrap>
  );
}

const Wrap = styled.div`
  background: #fffbec;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 44px 0 56px;
`;

const Title = styled.div`
  font-family: "bika", cursive;
  font-size: 48px;
  color: #6b5d44;
  text-align: center;
`;

const Scroller = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  padding: 20px 24px 4px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar { display: none; }
`;

const Card = styled.div`
  position: relative;
  flex: 0 0 82%;
  scroll-snap-align: start;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 18px rgba(132, 116, 75, 0.12);
  padding: 22px 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LikeBadge = styled.div`
  position: absolute;
  top: -14px;
  right: 14px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(132, 116, 75, 0.18);
  padding: 5px 12px;
  font-size: 12px;
  color: #c0504d;
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
`;

const AudioBadge = styled.div`
  position: absolute;
  top: -14px;
  right: 14px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 2px 8px rgba(132, 116, 75, 0.18);
  padding: 5px 12px;
  font-size: 12px;
  color: #84744b;
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
  white-space: nowrap;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  margin: 22px 0 8px;
  min-height: 42px;
`;

const Quote = styled.div`
  font-family: "display", cursive;
  font-size: 40px;
  color: #e3d3a3;
  line-height: 0.5;
`;

const WishText = styled.div`
  font-family: "body", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  color: #3a2a1a;
  min-height: 64px;
`;

const CardFoot = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid rgba(132, 116, 75, 0.12);
  padding-top: 12px;
  margin-top: auto;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6d5d3d;
  color: #fffbec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
`;

const WName = styled.div`
  font-family: "body", Arial, sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #3a2a1a;
`;

const Dots = styled.div`
  display: flex;
  gap: 6px;
`;

const Dot = styled.div`
  width: ${(p) => (p.active ? "18px" : "6px")};
  height: 6px;
  border-radius: 3px;
  background: ${(p) => (p.active ? "#84744b" : "#e3d9c2")};
  transition: all 0.25s;
`;
