import React from "react"
import styled from "styled-components";

interface EmotionProps{
    label : string;
    icon : React.ReactNode;
    bgColor : string;
    color : string;
    isSelected : boolean;
    onclick : () => void;
}

const EmotionItemStyled = styled.div<{$bgColor : string; $isisSelected : boolean; $color : string;}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 10px;
    background-color: ${(props) => props.$bgColor};
`;

export const EmotionItem = (props : EmotionProps) =>{
    return(
        <>

        </>
    )
}
