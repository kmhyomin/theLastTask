import React from "react";
import styled from "styled-components";
import { EMOTION_COLORS, EmotionType } from "../../data/emotionType";

interface EmotionCardProps {
  emotionText: EmotionType;
  emotionIcon: React.ReactNode;
  createAt: string;
  onEdit: () => void;
  onDelete: () => void;
  diaryContent?: string;
}

const CardContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-left: 5px solid ${(props) => props.color || "#ccc"};
  /* 아래서부선 figma css */
  display: flex;
  width: 342.408px;
  height: 150.322px;
  padding: 19.992px 0 0 19.992px;
  flex-direction: column;
  align-items: flex-start;
  gap: 35.971px;
  flex-shrink: 0;

  border-radius: 14px;
  border: 1.212px solid rgba(0, 0, 0, 0.1);
  background: #fff;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EmotionInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  &svg {
    display: flex;
    width: 39.966px;
    height: 39.966px;
    padding: 7.989px 7.989px 0 7.989px;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    fill: currentColor;
  }
`;

const EmotionText = styled.span`
  color: #0a0a0a;
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const DateText = styled.span`
  color: #717182;
  font-family: Arimo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const Content = styled.p`
  color: #717182;
  font-family: Arimo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const ActionBtns = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const ActionBtn = styled.button`
  display: flex;
  width: 31.995px;
  height: 31.995px;
  padding-right: 0.019px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  &:hover{
    background-color: #f0f0f0;
  }
`;

export const EmotionCard = ({
    emotionText,
    emotionIcon,
    createAt,
    onEdit,
    onDelete,
    diaryContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas suscipit, laborum."
} : EmotionCardProps) =>{
    const emotionColor = EMOTION_COLORS[emotionText] || '#ccc';

    return(
        <CardContainer color={emotionColor}>
            <Header>
                <EmotionInfo color={emotionColor}>
                    {emotionIcon}
                    <EmotionText>{emotionText}</EmotionText>
                </EmotionInfo>
                <DateText>{createAt}</DateText>
            </Header>

            <Content>{diaryContent.replace('[하드코딩]', String(emotionText))}</Content>

            <ActionBtns>
                <ActionBtn onClick={onEdit}></ActionBtn>
                <ActionBtn onClick={onDelete}></ActionBtn>
            </ActionBtns>
        </CardContainer>
    )

}
