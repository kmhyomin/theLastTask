import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/atoms/Button";
import DiaryIcon from "../assets/imgs/diary.svg?react";
import { FiPlus } from "react-icons/fi";
import { WriteDiaryModal } from "../components/organism/WriteDiaryModal";


const DiaryPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #faf5ff 0%, #fdf2f8 50%, #eff6ff 100%);
    text-align: center;
    margin: 0;
    padding: 0;
`;

const ContentArea = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    margin-top: calc(32px + 0px);
`;

const IconCard = styled.div`
    width: 140px;
    height: 140px;
    background-color: #fff;
    opacity: 0.4;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);

    svg{
      width: 70px;
      height: 70px;
      color: #717182;
    }
`;

const TextGroup = styled.div`
  text-align: center;

  h3{
    font-size: 16px;
    color: #717182;
  }
  p{
    font-size: 14px;
    color: #717182;
    line-height: 1.5;
  }
`;


export const Diary = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  console.log("현재 모달 상태는...." , isModalOpen);
  
    return (
      <DiaryPageWrapper>
        <ContentArea>
          <EmptyStateContainer>
            <IconCard>
              <DiaryIcon />
            </IconCard>
            <TextGroup>
              <h3>아직 작성된 일기가 없습니다.</h3>
              <p>첫 번째 일기를 작성해보세요!</p>
            </TextGroup>
          </EmptyStateContainer>
          <Button 
            variant="default"
            onClick={() => {
              setisModalOpen(true)
              console.log("일기팝업 뿅!")
            }}
            
            iconPosition="left"
            >
              <FiPlus />
              일기 쓰기
            </Button>
        </ContentArea>
        {isModalOpen &&(
          <WriteDiaryModal
            isOpen={isModalOpen}
            onClose={() => {setisModalOpen(false)}}
          />
        )}
      </DiaryPageWrapper>
    );
};
