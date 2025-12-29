import React from "react";
import styled, { css } from "styled-components";
import type { ButtonVariant } from '../../types/components.ts';

const DefulatBtn = css`
  width: 100px;
  height: 35px;
  color: #fff;
  border-radius: 8px;
  line-height: 35px;
`;
const LongBtn = css`
  width: 100%;
  height: auto;
  min-height: 48px;
  border-radius: 8px;
  line-height: auto;
`;
const CircleBtn = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const StyledBtn = styled.button<StyledButtonProps>`
  width: 100px;
  height: 30px;
  color: #fff;
  background-color: #000;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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
  iconPosition?: "left" | "right"; // enum 값
}

interface StyledButtonProps {
  $variant?: ButtonVariant;
}

export const Button = ({
    children,
    variant = "default",
    icon,
    iconPosition = "left",
    ...props
}: ButtonProps) => {
    const hasIcon = !!icon;
  return(
    <StyledBtn $variant={variant} {...props} >
        {hasIcon && iconPosition === "left" && icon}
          {children}
        {hasIcon && iconPosition === "right" && icon}
    </StyledBtn>
  );
};
