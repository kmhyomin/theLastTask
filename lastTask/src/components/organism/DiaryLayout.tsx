import React from "react";
import { Outlet } from "react-router-dom";
import { TabBar } from "../mocules/TabBar";
import { DIARY_TABS } from "../../data/diaryTabs";

export default function DiaruLayOut() {
  return (
    <>
      <TabBar tabs={DIARY_TABS} />
      <Outlet />
    </>
  );
}
