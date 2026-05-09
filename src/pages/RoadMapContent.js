import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import ymaps from "ymaps";
import twogis from "../img/2gis.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const RoadMapContent = () => {
  const [ref, visible] = useScrollAnimation({ threshold: 0.1 });
  const mapRef = useRef(null);

  const handleTwoGisClick = () => {
    window.open("https://2gis.kz/taraz/geo/70000001109566068/71.362882,42.906708");
  };

  useEffect(() => {
    ymaps
      .load()
      .then((maps) => {
        if (!mapRef.current) return;
        const mapInstance = new maps.Map(mapRef.current, {
          center: [42.906773, 71.362858],
          zoom: 18,
        });
        const marker = new maps.Placemark([42.906773, 71.362858]);
        mapInstance.geoObjects.add(marker);
      })
      .catch((error) => console.log("Failed to load Yandex Maps", error));
  }, []);

  return (
    <TextContentWrapper ref={ref} visible={visible}>
      <TitleText>Қалай жетуге болады?!</TitleText>
      <ContentText>
        Сізге ыңғайлы болу үшін <br /> осы картаны қолданыңыз
      </ContentText>

      <TwoGisButton onClick={handleTwoGisClick}>
        <TwoGis src={twogis} />
        <span>2GIS-те ашу</span>
      </TwoGisButton>

      {/* <MapContainer ref={mapRef} /> */}
    </TextContentWrapper>
  );
};

const TextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(40px)")};
  transition: opacity 1s ease, transform 1s ease;
`;

const TitleText = styled.h2`
  font-family: "GreatFont";
  font-size: 38px;
  margin: 0;
  font-weight: 200;
  color: #3d1a18;

  @media (max-width: 320px) {
    font-size: 32px;
  }
`;

const ContentText = styled.p`
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 200;
  text-align: center;
  color: #555;
`;

const TwoGisButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 2px solid #2a9d68;
  border-radius: 50px;
  padding: 10px 24px;
  cursor: pointer;
  font-family: "BKANTKZ", Arial, sans-serif;
  font-size: 15px;
  color: #2a9d68;
  font-weight: 500;
  box-shadow: 0 4px 16px rgba(42, 157, 104, 0.2);
  transition: all 0.3s ease;
  margin-bottom: 8px;

  &:hover {
    background: #2a9d68;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(42, 157, 104, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TwoGis = styled.img`
  width: 32px;
  height: 32px;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
`;

export default RoadMapContent;
