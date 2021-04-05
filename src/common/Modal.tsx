import styled from "@emotion/styled";
import React, { FC } from "react";
import { FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";

import { colors } from "../constants";

const ModalContainer = styled.div`
  height: 80vh;

  width: 80vw;
  max-width: 1200px;

  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  font-family: Roboto;
`;

const ModalIcon = styled.span`
  font-size: 48px;
  margin: 0px 24px;
  padding-top: 16px;
  color: ${colors.secondary};
`;

const ModalHeader = styled.h1`
  width: 100%;

  margin: 8px 0px;

  font-family: Roboto;
  font-size: 48px;
  color: ${colors.primary};
`;

const ModalContent = styled.div`
  width: 100%;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  font-size: 16px;
`;

const ModalCloseButton = styled(FaTimes)`
  margin: 0px 24px;
  padding-top: 16px;

  font-size: 40px;
  color: ${colors.primary};

  transition: 1s ease;
  :hover {
    color: ${colors.highlight};
    cursor: pointer;
  }
`;

type ModalProps = {
  modalIcon?: JSX.Element;
  modalHeader?: JSX.Element;
  modalVisible: boolean;
  onModalClose: () => void;
};

export const Modal: FC<ModalProps> = (props) => {
  const {
    children,
    modalHeader,
    modalIcon,
    modalVisible,
    onModalClose,
  } = props;

  return (
    <ReactModal
      isOpen={modalVisible}
      onRequestClose={onModalClose}
      closeTimeoutMS={1000}
      style={{
        overlay: {
          zIndex: 5,
          backdropFilter: "blur(0.75em)",
          backgroundColor: "rgba(0, 0, 0, 0.90)",
        },
        content: {
          fontFamily: "Roboto",
          color: colors.primary,
          borderColor: "transparent",
          backgroundColor: "transparent",
        },
      }}
    >
      <ModalContainer>
        {modalIcon && <ModalIcon>{modalIcon}</ModalIcon>}
        <ModalContent>
          {modalHeader && <ModalHeader>{modalHeader}</ModalHeader>}
          {children}
        </ModalContent>
        <ModalCloseButton onClick={onModalClose} />
      </ModalContainer>
    </ReactModal>
  );
};
