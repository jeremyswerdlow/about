import React, { forwardRef, Ref } from "react";
import { Section, SectionHeader, StyledTitle, StyledParagraph } from "../common";
import { Table } from "antd";

type alignment = "right" | "left" | "center" | undefined

type record = {
  title: string,
  icon: JSX.Element,
  link: string,
  text: string,
};

const columns = [
  {
    dataIndex: "icon",
    key: "icon",
    width: "10px"
  },
  {
    dataIndex: "title",
    key: "title",
  },
  {
    dataIndex: "text",
    key: "text",
    align: "right" as alignment,
  }
]

type ContactSectionProps = {
  contacts: {
    header: string,
    subheader: string,
    summary: string,
    list: record[],
  }
};

export const ContactSection = forwardRef((props: ContactSectionProps, ref: Ref<HTMLDivElement>) => {
  return (
    <Section ref={ref} style={{paddingTop: "100px"}} >
      <SectionHeader title={props.contacts.header} num="05." />
      <StyledTitle>{props.contacts.subheader}</StyledTitle>
      <StyledParagraph>{props.contacts.summary}</StyledParagraph>
      <Table
        columns={columns}
        dataSource={props.contacts.list}
        onRow={(record, _) => {
          return { onClick: _ => window.open(record.link, "_blank") };
        }}
        pagination={false}
        showHeader={false}
      />
    </Section>
  );
});
