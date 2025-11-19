import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface NavLinkItemProps{
    to : string;
    label : string;
    icon:React.ReactNode;
}

const NavItemStyle = styled(NavLink)`
    flex: 1; /* 가로 공간 균등 분할 */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #777; /* 기본 색상 */
    text-decoration: none;
    padding: 10px 0;
    transition: color 0.2s;
    

    /* 🚨 활성 상태 스타일링 (NavLink가 자동으로 'active' 클래스를 추가함) */
    &.active {
        color: #9810FA; /* 활성 색상 */
        font-weight: bold;
        background-color:#fff;
    }
    
    /* 아이콘 스타일링 (SVG의 currentColor를 통해 색상 제어) */
    & svg {
        font-size: 18px; /* SVG 크기 */
        width: 24px;
        height: 24px;
        margin-bottom: 2px;
        /* 활성 상태일 때 부모의 color를 따라가도록 함 */
        stroke: currentColor !important;
    }
`;

export const NavLinkItem = ({to,label,icon} : NavLinkItemProps) => {
    return (
        <NavItemStyle to={to}>
            {icon}
            {label}
        </NavItemStyle>
    );
}