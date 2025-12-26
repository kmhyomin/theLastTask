import React from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    $fullWidth? : boolean;
    icon? : React.ReactNode;
}

const  InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

const IconWrapper = styled.div`
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    pointer-events: none;
`;

export const InputStyle = styled.input<{$fullWidth? : boolean}>`
    width: ${({$fullWidth}) => ($fullWidth ? "100%" : "auto")};
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
`;

export const Input = ({icon, ...props} :  InputProps) => {
    return(
        <InputContainer>
            {icon && <IconWrapper>{icon}</IconWrapper>}
            <InputStyle {...props}/>
        </InputContainer>
    )
}