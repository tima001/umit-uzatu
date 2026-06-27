import React from "react";
import styled from "@emotion/styled";

export default function InvitationText() {
  return (
    <>
      <Heading>Құрметті қонақтар!</Heading>

      <GuestText>
        Құрметті ағайын-туыс,<br/>бауырлар, құда-жекжат,<br/> нағашы-жиен, бөлелер,<br/>
        әпке-жезделер,<br/>дос-жарандар,<br/> әріптестер және көршілер!
        <br/><br/>
        Сіз(дер)ді қызымыз<br/>Үміттің ұзату тойына<br/>арналған салтанатты ақ<br/>дастарханымыздың<br/>қадірлі қонағы болуға<br/>шақырамыз.

      </GuestText>
    </>
  );
}

const Heading = styled.div`
    font-family: "bika", Arial, sans-serif;
    font-size: 36px;
  color: rgb(135, 115, 115);
  text-align: center;
  margin-bottom:14px;
`;

const GuestText = styled.p`
  font-family: "KZ_RomulC", Arial, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.7;
  text-align: center;
  text-transform:uppercase;
  color: rgb(135, 115, 115);
  margin: 0;
`;
