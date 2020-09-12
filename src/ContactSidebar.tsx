import React, { FC } from "react";
import { Layout, Button } from "antd";
import styled from "styled-components";

const CenteredVerticalLine = styled.div`
  width: 1px;
  background-color: #177ddc;
  height: 100px;
  display: block;
  margin: 10px auto auto auto;
`;

const ContactSider = styled(Layout.Sider)`
  background: transparent;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
`;

const ContactButton = styled(Button)`
  border-width: 0px;
  display: block;
  margin: auto;
`;

type ContactSidebarProps = {
  contacts: {title: string, icon: JSX.Element, link: string, text: string}[]
}

export const ContactSidebar: FC<ContactSidebarProps> = (props) => {
  return (
    <ContactSider width={50} >
      {props.contacts.map(({title, icon, link}) => {
        return (
          <ContactButton
            key={`${title}-side`}
            href={link}
            icon={icon}
            size="large"
            shape="circle"
            target="_blank"
            type="link"
          />
        );
      })}
      <CenteredVerticalLine />
    </ContactSider>
  );
};