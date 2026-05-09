import React, { useState } from "react";
import styled from "@emotion/styled";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const FormContent = () => {
  const [name, setName] = useState("");
  const [participationStatus, setParticipationStatus] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isResponseSent, setIsResponseSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 });

  const handleSend = () => {
    if (!name || !participationStatus) {
      setSubmissionStatus("error");
      return;
    }

    setIsLoading(true);
    const messageText = `${name}    ${participationStatus}`;
    axios
      .post(
        `https://api.telegram.org/bot6557386352:AAEbMqo56A1KsSkrsWfWfSICNqTah91w_ec/sendMessage?chat_id=@weddingadamsany&text=${messageText}`
      )
      .then(() => {
        setSubmissionStatus("success");
        setIsResponseSent(true);
        setIsLoading(false);
        setTimeout(() => setSubmissionStatus(null), 2000);
      })
      .catch(() => {
        setSubmissionStatus("error");
        setIsLoading(false);
        setTimeout(() => setSubmissionStatus(null), 5000);
      });
  };

  return (
    <TextContentWrapper ref={ref} visible={visible}>
      {isResponseSent ? (
        <SuccessWrapper>
          <SuccessEmoji>💌</SuccessEmoji>
          <SuccessText>Сіздің жауабыңыз жіберілді!</SuccessText>
          <SuccessSubText>Біз сізді күтеміз! 🎉</SuccessSubText>
        </SuccessWrapper>
      ) : (
        <>
          <FormHeader>
            <FormEmoji>✉️</FormEmoji>
            <TitleName>
             Сауалнама
             </TitleName>

            <TitleText>
             
тойға қатысуыңызды   <br />     растауыңызды сұраймыз:     </TitleText>
          </FormHeader>

          <FormCard>
            <FormControl
              id="form"
              style={{
                width: "100%",
                gap: "20px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TextField
                error={submissionStatus === "error" && !name}
                required
                helperText="Жұбыңызбен келсеңіз, есімдеріңізді бірге жаза кетіңіз"
                variant="outlined"
                size="small"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />
             
              <RadioGroup
                value={participationStatus}
                onChange={(e) => setParticipationStatus(e.target.value)}
              >
                <FormControlLabel
                  value="Иә"
                  control={<Radio sx={{ color: "#292929", "&.Mui-checked": { color: "#292929" } }} />}
                  label="Иә, келемін"
                  sx={{ fontFamily: "GreatFont" }}
                />
                <FormControlLabel
                  value="Жұбайыммен"
                  control={<Radio sx={{ color: "#292929", "&.Mui-checked": { color: "#292929" } }} />}
                  label="Жұбайыммен келемін"
                  sx={{ fontFamily: "Romulc" }}
                />
                <FormControlLabel
                  value="Жоқ"
                  control={<Radio sx={{ color: "#292929", "&.Mui-checked": { color: "#292929" } }} />}
                  label="Өкінішке орай, келе алмаймын"
                  sx={{ fontFamily: "Romulc" }}
                />
              </RadioGroup>

              {submissionStatus === "success" && (
                <Alert severity="success" onClose={() => setSubmissionStatus(null)}>
                  Сіздің жауабыңыз сәтті сақталды!
                </Alert>
              )}
              {submissionStatus === "error" && (
                <Alert severity="error" onClose={() => setSubmissionStatus(null)}>
                  Толықтай форманы толтырыңыз
                </Alert>
              )}

              <SendButton
                variant="contained"
                onClick={handleSend}
                endIcon={isLoading ? null : <SendIcon />}
                disabled={isLoading}
              >
                {isLoading ? "Жіберілуде..." : "Жіберу"}
              </SendButton>
            </FormControl>
          </FormCard>
        </>
      )}
    </TextContentWrapper>
  );
};

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  padding: 0 20px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(40px)")};
  transition: opacity 1s ease, transform 1s ease;
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const FormEmoji = styled.div`
  font-size: 36px;
  animation: floatUpDown 3s ease-in-out infinite;

  @keyframes floatUpDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
`;

const FormCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 28px 24px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(161, 27, 20, 0.1);
`;

const TitleText = styled.h2`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 17px;
  text-align: center;
  font-weight: 200;
  line-height: 1.7;
  color: #3d1a18;
  text-transform: uppercase;
`;

const TitleName = styled.h2`
font-family: "GreatFont";
  font-size: 48px;
  color: #aa915d;
  line-height: 80%;
`;
const SendButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #aa915d, #b48a2e);
    border-radius: 12px;
    padding: 12px;
    font-family: "BKANTKZ", Arial, sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    box-shadow: 0 4px 20px rgba(161, 27, 20, 0.35);
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #b19e76, #e6c070);
      box-shadow: 0 8px 28px rgba(161, 27, 20, 0.5);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 60px 24px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  animation: popIn 0.6s ease both;

  @keyframes popIn {
    0% { transform: scale(0.8); opacity: 0; }
    70% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
  }
`;

const SuccessEmoji = styled.div`
  font-size: 56px;
  animation: heartbeat 1.5s ease-in-out 3;

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.2); }
    28% { transform: scale(1); }
    42% { transform: scale(1.15); }
  }
`;

const SuccessText = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: #2d7a3a;
  text-align: center;
`;

const SuccessSubText = styled.div`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 18px;
  font-weight: 200;
  color: #555;
`;

export default FormContent;
