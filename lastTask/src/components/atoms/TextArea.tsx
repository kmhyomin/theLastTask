import React from "react";
import styled from "styled-components";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    $height?: string; // 댓글쓰는거랑 일기 쓰는거랑 달라서 넣었다
    $bgColor? : string; // 이하동문
}


const TextAreaStyle = styled.textarea<TextAreaProps>`
    width: 100%;
    height: ${({$height}) => $height || "120px"};
    background-color: ${({$bgColor}) => $bgColor || "#F3F3F5"};
    padding: 12px 8px; //이거 유심히 보기@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    border-radius: 8px;
    border: none;
    resize: none;
    font-size: 16px;

    &::placeholder{
        color: #717182; // placeholder 안 바꿀 것 같아서 하드코딩 했뜸
    }
`;

export const TextArea = (props : TextAreaProps) => {
    return(
        <>
            <TextArea {...props} />
        </>
    )
}