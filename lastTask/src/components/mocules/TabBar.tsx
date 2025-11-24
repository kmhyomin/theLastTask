import React from "react";
import styled from "styled-components";
import { TabBtn } from "../atoms/TabButton";
import { IoReturnUpBack } from "react-icons/io5";

interface TabItem {
  id: string; //탭을 구별하는 고유 ID
  label: string;
  path: string;
}

interface TabBarProps {
  tabs: TabItem[]; // 탭 버튼에 페이지 정보 데이터 연결
}

const TabBarContainer = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  padding: 3.484px 2.991px 3.124px 2.991px;
  background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  border-radius: 20px;
  background: #ececf0;
`;

export const TabBar = ({ tabs }: TabBarProps) => {
  return (
    <TabBarContainer role="tablist">
      {tabs.map((tab) => (
        <TabBtn key={tab.id} label={tab.label} to={tab.path}></TabBtn>
      ))}
    </TabBarContainer>
  );
};
