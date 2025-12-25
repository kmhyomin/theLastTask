import React from "react"
import styled from "styled-components";

interface EmotionProps{
    label : string;
    icon : React.ReactNode;
    bgColor : string;
    color : string;
    isSelected : boolean;
    onClick : () => void;
}

const EmotionItemContainer = styled.div<{$bgColor : string; $isSelected : string; $color : string;}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    padding: 16px 10px;
    background-color: ${(props) => props.$bgColor};
    border-radius: 10px;
    border: 1px solid ${(props) => (props.$isSelected ? "#9810fa" : "transparent")};
    // 이건 나중에 감정별 색깔로 바뀌는걸로 바꾸기
    transition: all 0.2s ease;
    cursor: pointer;

    span{
        font-size: 14px;
        color : ${(props) => props.$color};
    }

    svg{
        width: 8px;
        // 색은 아예 이미지에 박아서 안씀
    }
`;

export const EmotionItem = ({label, icon, bgColor,color, isSelected, onClick} : EmotionProps) =>{
    return(
        <EmotionItemContainer $bgColor={bgColor} $isSelected={isSelected} $color= {color} onClick={onClick}> 
            {icon}
            {label}
        </EmotionItemContainer>
    )
}