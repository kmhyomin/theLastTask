import React from "react";
import styled from "styled-components";
import { NavItemType } from "../../data/navItem";
import { NavLinkItem } from "../atoms/NavLinkItem";

interface BottomNavProps {
  items: NavItemType[];
}

const NavContainer = styled.nav`
  display: flex;
  width : 100%;
  z-index: 1000;
  height: 83.926px;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  background-color :#fff;
  position: fixed;
  bottom : 0;
  left:0;
  `;

export const BottomNavModule = ({ items }: BottomNavProps) => {
  return (
    <NavContainer>
      {items.map((item) => (
        <NavLinkItem
          key={item.path}
          to={item.path}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </NavContainer>
  );
};
