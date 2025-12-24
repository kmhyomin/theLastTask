import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    $fullWidth? : boolean;
}

export const InputStyle = styled.input<{$fullWidth? : boolean}>`
    width: ${({$fullWidth}) => ($fullWidth ? "100%" : "auto")};
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
`;

export const Input = (props :  InputProps) => {
    return(
        <>
            <InputStyle {...props}/>
        </>
    )
}