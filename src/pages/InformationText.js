import React from "react";
import styled from "@emotion/styled";

export default function InformationText() {
  return (
    <>
      <VenueLabel>Мекен-жайы:</VenueLabel>

      <AddrBlock>
        <City>Тараз қаласы,</City>
        <Street>Аль-Фараби көшесі, 68</Street>
        <VName>«Qobyz ballroom»</VName>
        <VType>салтанат сарайы</VType>
      </AddrBlock>

      <MapBtn onClick={() => window.open("https://2gis.kz/taraz/firm/70000001111844810")}>
        Картаны ашу
      </MapBtn>
    </>
  );
}

const VenueLabel = styled.div`
  font-family: "bika", cursive;
  font-size: 48px;
  color: #84744b;
  text-align: center;
`;

const AddrBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const City = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-size: 17px;
  color: #3a2a1a;
  text-align: center;
`;

const Street = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-size: 16px;
  color: #84744b;
  text-align: center;
`;

const VName = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #3a2a1a;
  text-align: center;
  margin-top: 6px;
`;

const VType = styled.div`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-size: 16px;
  color: #84744b;
  text-align: center;
`;

const MapBtn = styled.button`
  font-family: "KZPFMonumentaPro", Arial, sans-serif;
  font-weight: 600;
  font-size: 12px;
  color: #fffbec;
  background: #84744b;
  border: none;
  border-radius: 50px;
  padding: 12px 28px;
  cursor: pointer;
  letter-spacing: 0.5px;
  margin-top: 24  px;
  transition: all 0.3s;
  &:hover { background: #6d5d3d; transform: translateY(-2px); }
`;
