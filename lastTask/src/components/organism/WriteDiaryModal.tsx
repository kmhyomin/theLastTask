import styled from "styled-components";
import { FromSection } from "../molecules/FromSection";
import { IoMdClose } from "react-icons/io";
import { Input } from "../atoms/Input";
import { EmotionGrid } from "../molecules/EmotionGrid";
import { TextArea } from "../atoms/TextArea";
import { Button } from "../atoms/Button";
import { CustomDatePicker } from "../molecules/CustomDatePicker";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 400px;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHreader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  position: relative;

  h2 {
    font-size: 18px;
    font-weight: 700;
  }
`;

const ColseButton = styled.button`
  position: absolute;
  right: 0%;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

interface WriteDirayModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const WriteDiaryModal = ({ isOpen, onClose }: WriteDirayModalProps) => {
  if (!isOpen) return null; //열리지 않았다면 랜더링 X
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHreader>
          <h2>새 일기 작성</h2>
          <ColseButton onClick={onClose}>
            <IoMdClose />
          </ColseButton>
        </ModalHreader>
        <FromSection label="날짜">
          <CustomDatePicker />
        </FromSection>
        <FromSection label="오늘의 기분">
          <EmotionGrid />
        </FromSection>
        <FromSection label="일기 내용">
          <TextArea
            placeholder="오늘 하루는 어땠나요? 자유롭게 작성해보세요..."
            $height="120px"
            $bgColor="#F3F3F5"
          />
        </FromSection>
        <ButtonGroup>
          <Button
            color="#333"
            variant="long"
            onClick={() => alert("일기가 제출되었어요!")}
          >
            제출
          </Button>
          <Button variant="long" onClick={onClose}>
            취소
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};
