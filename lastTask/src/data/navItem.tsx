import React from 'react';
import DiaryIcon from "../assets/imgs/diary.svg?react";
import CommunityIcon from "../assets/imgs/community.svg?react";
import MyPageIcon from "../assets/imgs/myPage.svg?react";

export interface NavItemType{
    path : string;
    label : string;
    icon : React.FC<React.SVGProps<SVGSVGElement>>;
}

export const NAV_ITEMS :NavItemType[] = [
    {path:"/", label:'일기', icon: DiaryIcon },
    {path:"/community", label:'커뮤니티', icon: CommunityIcon },
    {path:"/my_page", label:'마이 페이지', icon: MyPageIcon}
]

/*
export const NAV_ITEMS :NavItemType[] = [
    {path:"/", label:'일기', icon: <DiaryIcon />},
    {path:"/community", label:'커뮤니티', icon: <CommunityIcon />},
    {path:"/my_page", label:'마이 페이지', icon: <MyPageIcon />}
]
*/