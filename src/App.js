import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import NewMusic from "./music/music.MP3";
import Components from "./Components";

export default function App() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = false;
    audioRef.current
      .play()
      .then(() => setIsMuted(false))
      .catch(() => {
        audioRef.current.muted = true;
        setIsMuted(true);
        audioRef.current.play().catch(() => {});
      });
  }, []);

  useEffect(() => {
    const wasPlaying = { current: false };
    const duck = () => {
      const el = audioRef.current;
      if (!el) return;
      el.volume = 0.03;
      wasPlaying.current = !el.paused;
      el.pause();
    };
    const restore = () => {
      const el = audioRef.current;
      if (!el) return;
      el.volume = 1;
      if (wasPlaying.current) el.play().catch(() => {});
    };
    window.addEventListener("bgmusic-duck", duck);
    window.addEventListener("bgmusic-restore", restore);
    return () => {
      window.removeEventListener("bgmusic-duck", duck);
      window.removeEventListener("bgmusic-restore", restore);
    };
  }, []);

  const toggle = () => {
    const next = !isMuted;
    audioRef.current.muted = next;
    if (!next) audioRef.current.play().catch(() => {});
    setIsMuted(next);
  };

  return (
    <>
      <audio ref={audioRef} src={NewMusic} loop />
      <Components isMuted={isMuted} onToggle={toggle} />
    </>
  );
}
