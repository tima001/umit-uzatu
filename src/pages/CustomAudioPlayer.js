import React, { useState, useRef, useEffect } from "react";
import MyMusic from "../music/dudeontheguitarHey Monro-Boiy Bulgan.mp3";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(64, 103, 90, 0.4); }
  50% { box-shadow: 0 0 0 12px rgba(64, 103, 90, 0); }
`;

const CustomAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
    if (!newMuted) setIsPlaying(true);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [isMuted]);

  return (
    <MuteWrapper>
      <audio ref={audioRef} src={MyMusic} loop />
      <PlayerButton onClick={toggleMute} isPlaying={!isMuted}>
        <VinylDisc isPlaying={!isMuted}>
          <VinylCenter />
        </VinylDisc>
        <ButtonIcon>{isMuted ? "🔇" : "🎵"}</ButtonIcon>
      </PlayerButton>
    </MuteWrapper>
  );
};

export default CustomAudioPlayer;

const MuteWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  justify-content: flex-end;
  padding-right: 16px;
  z-index: 100;

  @media (max-width: 425px) {
    top: 420px;
  }
  @media (max-width: 375px) {
    top: 320px;
  }
  @media (max-width: 320px) {
    top: 260px;
  }
`;

const VinylDisc = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #2d4a42 0deg 30deg,
    #3d5a52 30deg 60deg,
    #2d4a42 60deg 90deg,
    #3d5a52 90deg 120deg,
    #2d4a42 120deg 150deg,
    #3d5a52 150deg 180deg,
    #2d4a42 180deg 210deg,
    #3d5a52 210deg 240deg,
    #2d4a42 240deg 270deg,
    #3d5a52 270deg 300deg,
    #2d4a42 300deg 330deg,
    #3d5a52 330deg 360deg
  );
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${({ isPlaying }) =>
    isPlaying &&
    css`
      animation: ${spin} 3s linear infinite;
    `}
`;

const VinylCenter = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 3px rgba(64, 103, 90, 0.3);
`;

const PlayerButton = styled.button`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid #40675a;
  background: #fff;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(64, 103, 90, 0.25);
  ${({ isPlaying }) =>
    isPlaying &&
    css`
      animation: ${pulse} 2s ease-in-out infinite;
    `}

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 24px rgba(64, 103, 90, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ButtonIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  z-index: 2;
  pointer-events: none;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
`;

const Tooltip = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 11px;
  color: #40675a;
  text-align: right;
  white-space: nowrap;
  opacity: 0.8;
`;
