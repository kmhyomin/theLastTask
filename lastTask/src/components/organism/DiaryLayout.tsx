import React from "react";
import { Outlet } from "react-router-dom";
import { TabBar } from "../molecules/TabBar";
import { DIARY_TABS } from "../../data/diaryTabs";

export default function DiaryLayout() {
    
  return (
    <>
      <TabBar tabs={DIARY_TABS} />
      <Outlet />
    </>
  );
}
