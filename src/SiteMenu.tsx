import React, { FC } from "react";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";

type SiteMenuProps = {
  links: {title: string, link: string}[],
};

export const SiteMenu: FC<SiteMenuProps> = (props) => {
  return (
    <Menu
      mode="horizontal"
      selectable={false}
      style={{fontFamily: "'Roboto'"}}
    >
      <Menu.Item key="home" icon={ <HomeOutlined /> } >
        Jeremy Swerdlow | Software Engineer
      </Menu.Item>
      {
        props.links.reverse().map(({title, link}) => {
          return (
            <Menu.Item key={link} style={{float: 'right'}} >
              {title}
            </Menu.Item>
          )
        })
      }
    </Menu>
  );
};