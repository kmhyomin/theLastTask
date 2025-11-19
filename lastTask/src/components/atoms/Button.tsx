import React from "react";
import styled from "styled-components";
import type { ButtonVariant } from '../../types/components.ts';

const DefulatBtn = styled.div`
  width: 100px;
  height: 30px;
  color: #fff;
`;
const LongBtn = styled.div`
  width: 100%;
  height: 30px;
`;
const CircleBtn = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StyledBtn = styled.button<StyledButtonProps>`
  width: 100px;
  height: 30px;
  color: #fff;
  background-color: #000;
  display: flex;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  ${({ $variant }) => {
    switch ($variant) {
      case "default":
        return DefulatBtn;
      case "long":
        return LongBtn;
      case "circle":
        return CircleBtn;
      default:
        return DefulatBtn;
    }
  }}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

interface StyledButtonProps {
  $variant?: ButtonVariant;
}

export const Button = ({
    children,
    variant = "default",
    icon,
    iconPosition = "left"
}: ButtonProps) => {
    const hasIcon = !!icon;
    const content =(
        <>
            {hasIcon && iconPosition === "left" && icon}
            {children}
            {hasIcon && iconPosition === "right" && icon}
        </>
    );
  return(
    <StyledBtn $variant={variant}>
        {content}
    </StyledBtn>
  );
};
