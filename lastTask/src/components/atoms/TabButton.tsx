import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// 타입을 정의
interface TabBtnProps {
  label: string;
  to: string;
}

const TabBtnStyle = styled(NavLink)`
  cursor: pointer;
  margin: 0 5px;
  color: #0a0a0a;
  background-color: #ececf0;

  font-family: Arimo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  &.active {
    background-color: #fff;
  }

  &:hover:not(:disabled) {
    color: #333;
  }

  /* 여기서부턴 figma css */
  display: flex;
  width: 177.3px;
  height: 29.383px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  border-radius: 18px;
  border: 1.212px solid rgba(0, 0, 0, 0);

  flex-grow: 1; // 추가해서 버튼들이 부모 컨테이너 너비를 균등 분배하도록 함
`;

export function TabBtn({ label, to }: TabBtnProps) {
  return (
    <TabBtnStyle to={to} role="tab">
      {label}
    </TabBtnStyle>
  );
}
