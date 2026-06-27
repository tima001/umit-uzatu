import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import axios from "axios";

const pop = keyframes`0%{transform:scale(.8);opacity:0}70%{transform:scale(1.04)}100%{transform:scale(1);opacity:1}`;
const ringPop = keyframes`0%{transform:scale(.5);opacity:0}60%{transform:scale(1.1);opacity:1}100%{transform:scale(1);opacity:1}`;
const draw = keyframes`from{stroke-dashoffset:24}to{stroke-dashoffset:0}`;

const OPTIONS = [
  { v: "Келемін", l: "Иә, барамын!" },
  { v: "Жұбыммен-келемін", l: "Жұбыммен бірге барамын" },
  { v: "Келе-алмаймын", l: "Өкінішке орай, келе алмаймын" },
];

export default function FormContent() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const send = () => {
    if (!name || !status) { setErr(true); return; }
    setLoading(true);
    axios.post(`https://api.telegram.org/bot${process.env.REACT_APP_TG_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_TG_CHAT}&text=${name}    ${status}`)
      .then(() => { setSent(true); setLoading(false); })
      .catch(() => { setLoading(false); });
  };

  return (
    <Wrap>
      <Title>Тойға келуіңізді<br />растауыңызды сұраймыз</Title>

      {sent ? (
        <SuccessBox>
          <SRing>
            <svg viewBox="0 0 36 36" width="40" height="40">
              <path d="M9 19l6 6 12-14" fill="none" stroke="#fffbec" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" strokeDasharray="24" strokeDashoffset="24" />
            </svg>
          </SRing>
          <STitle>Жауабыңыз жіберілді!</STitle>
          <SText>Біз сізді күтеміз!</SText>
        </SuccessBox>
      ) : (
        <>
          <NameInput
            placeholder="Есіміңіз"
            value={name}
            onChange={(e) => { setName(e.target.value); setErr(false); }}
          />
          <FieldHint>Жұбыңызбен келсеңіз, жұбыңыздың есімін де жазыңыз</FieldHint>

          <CardGroup>
            {OPTIONS.map((opt) => (
              <Card key={opt.v} onClick={() => setStatus(opt.v)} active={status === opt.v ? 1 : 0}>
                <Dot active={status === opt.v ? 1 : 0} />
                <CardLabel>{opt.l}</CardLabel>
              </Card>
            ))}
             <SubmitBtn onClick={send} disabled={loading}>
            {loading ? "Жіберілуде..." : "Жауап беру"}
          </SubmitBtn>
          </CardGroup>

          {err && <ErrTxt>Барлық өрістерді толтырыңыз</ErrTxt>}

         
        </>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  background: #fffbec;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 40px 24px 48px;
`;

const Title = styled.div`
  font-family: "bika", cursive;
  font-size: 43px;
  color: #84744b;
  line-height: 0.8;
  text-align: center;
  margin-bottom: 16px;
`;

const NameInput = styled.input`
  width: 100%;
  max-width: 320px;
  border: 1.5px solid #cdad56;
  border-radius: 50px;
  background: #fff;
  outline: none;
  padding: 12px 20px;
  font-size: 15px;
  font-family: "body", Arial, sans-serif;
  color: #3a2a1a;
  &::placeholder { color: #c8b06d; }
`;

const FieldHint = styled.div`
  font-family: "body", Arial, sans-serif;
  font-size: 11px;
  color: #a1916f;
  text-align: center;
  max-width: 280px;
  line-height: 1.5;
`;

const CardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 320px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(132, 116, 75, 0.12);
  border: 1.5px solid ${(p) => (p.active ? "#cdad56" : "transparent")};
  cursor: pointer;
  transition: border-color 0.2s;
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 1.5px solid #cdad56;
  background: ${(p) => (p.active ? "#cdad56" : "transparent")};
  transition: background 0.2s;
`;

const CardLabel = styled.div`
  font-family: "body", Arial, sans-serif;
  font-size: 14px;
  color: #3a2a1a;
`;

const ErrTxt = styled.div`
  font-family: "body", Arial, sans-serif;
  font-size: 12px;
  color: #cc4444;
`;

const SubmitBtn = styled.button`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 700;
  margin-top: 16px;
  font-size: 12px;
  width: 100%;
  letter-spacing: 1px;
  color: #fffbec;
  background: #6d5d3d;
  border: none;
  border-radius: 16px;
  padding: 16px 40px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover { background: #574a30; transform: translateY(-2px); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const SuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 24px;
  animation: ${pop} 0.6s ease both;
`;
const SRing = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #84744b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
  animation: ${ringPop} 0.5s ease both;
  svg path { animation: ${draw} 0.5s ease 0.4s forwards; }
`;
const STitle = styled.div`
  font-family: "bika", cursive;
  font-size: 48px;
  color: #84744b;
  text-align: center;
`;
const SText = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-size: 16px;
  color: #a1916f;
`;
