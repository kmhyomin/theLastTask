import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { TabBar } from "../components/mocules/TabBar";
import { DIARY_TABS } from "../data/diaryTabs";


const DiaryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const ContenArea = styled.main`
  flex-grow: 1; // 남을 공간을 채우도록 함.
  padding: 20px;
`;



export const Diary = () =>{
  return(
    <DiaryPageContainer>
      <ContenArea>
        <Outlet />
      </ContenArea>
    </DiaryPageContainer>
  )
};
