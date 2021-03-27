import styled from "@emotion/styled";
import React, { forwardRef, Ref } from "react";

import { Section } from "./common";
import { colors, contacts } from "./constants";

const ContactBody = styled.div``;

const ContactSection = styled(Section)`
  margin: auto;

  font-family: Roboto;
`;

const ContactHeader = styled.h1`
  margin-top: 0px;
  margin-bottom: 10px;

  user-select: none;

  font-size: 90px;
  color: ${colors.highlight};
`;

const ContactParagraph = styled.p`
  user-select: none;

  font-size: 16px;
  color: ${colors.secondary};
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 5px;
  padding: 15px;
  border-radius: 5px;

  user-select: none;
  cursor: pointer;

  transition: 0.75s ease;
  :hover {
    color: ${colors.primary};
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

type ContactProps = {
  sectionId: string;
};

export const Contact = forwardRef(
  (props: ContactProps, ref: Ref<HTMLDivElement>) => {
    return (
      <ContactBody ref={ref}>
        <ContactSection sectionId={props.sectionId} header={contacts.header}>
          <ContactHeader>{contacts.subheader}</ContactHeader>
          <ContactParagraph>{contacts.summary}</ContactParagraph>
          {contacts.list.map((contact, index) => (
            <ContactRow key={index} onClick={() => window.open(contact.link)}>
              {contact.icon}
              {contact.text}
            </ContactRow>
          ))}
        </ContactSection>
      </ContactBody>
    );
  }
);
