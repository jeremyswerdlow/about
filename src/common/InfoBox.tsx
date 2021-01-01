import styled from "@emotion/styled";
import React, { FC } from "react";
import { FaInfo } from "react-icons/fa";
import { colors } from "../constants";

type InfoBoxProps = {
  icon?: JSX.Element;
} & React.HTMLAttributes<HTMLDivElement>;

const StyledBox = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  padding: 25px;
  border: 1.25px solid ${colors.accents};
  border-radius: 5px;
`;

export const InfoBox: FC<InfoBoxProps> = (props) => {
  return (
    <StyledBox {...props}>
      {props.icon || (
        <FaInfo
          fontSize="40px"
          style={{ paddingRight: "25px", alignSelf: "center" }}
        />
      )}
      {props.children}
    </StyledBox>
  );
};
