import React from "react";
import styled from "@emotion/styled";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Reveal({ children, delay = 0 }) {
  const [ref, vis] = useScrollAnimation({ threshold: 0.1 });
  return (
    <Box ref={ref} vis={vis ? 1 : 0} delay={delay}>
      {children}
    </Box>
  );
}

const Box = styled.div`
  opacity: ${(p) => (p.vis ? 1 : 0)};
  transform: ${(p) => (p.vis ? "translateY(0)" : "translateY(28px)")};
  transition: opacity 0.8s ease ${(p) => p.delay}s, transform 0.8s ease ${(p) => p.delay}s;
`;
