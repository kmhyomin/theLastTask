import React from "react";
import styled from "styled-components";

// 왜 만들었냐?? => 아톰 < input 조립용임

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
    width: 100%;
`;

const Label = styled.label`
    font-size: 16px;
    color: #333;
    text-align: left;
`;

interface FormSectionProps{
    label : string; // 날짜, 오늘의 기분, 일기 내용이 들어감
    children : React.ReactNode; // input 아톰이나 textarea 아톰이 들어감
    // 피그마 참고하면 더 이해하기 쉬워짐
}


export const FromSection = ({label, children} : FormSectionProps) => {
    return(
        <SectionContainer>
            <Label>{label}</Label>
            {children}
        </SectionContainer>
    )

};