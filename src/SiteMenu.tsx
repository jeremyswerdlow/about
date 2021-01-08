import styled from "@emotion/styled";
import React, { FC } from "react";

const paddingSides = "25px";

const StyledMenuBar = styled.div`
  height: 12em;
  width: calc(100vw - 2 * ${paddingSides});
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(to top, rgba(25, 25, 35, 0), rgba(25, 25, 35, 1));
  font-family: Roboto, "Open Sans", "Helvetica Neue", sans-serif;
  z-index: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0px ${paddingSides};
  pointer-events: none;

  button {
    pointer-events: all;
  }
`;

type SiteMenuProps = {
  children: JSX.Element[];
};

export const SiteMenu: FC<SiteMenuProps> = (props) => {
  return <StyledMenuBar>{props.children!.slice().reverse()}</StyledMenuBar>;
};
