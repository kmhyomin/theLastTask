import styled from "styled-components";
import { CiFaceSmile } from "react-icons/ci";
import { LiaTrashAlt } from "react-icons/lia";
import { FaPen } from "react-icons/fa";

export const Wrapper = styled.div`
  width: 100vw;
  max-width: 460px;
  height: cacl(100vh - 80px);
  padding: 10px;
  text-align: center;
  margin: auto;
  background: #f3e8ff;
  overflow: hidden;
  position: relative;
  cursor:pointer;
`;

export const DefaultBtn = styled.div`
  width: 100px;
  height: 30px;
  background-color: #030213;
  color: #f3f3f3;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 10px 5px;
  padding : 5px;
  cursor:pointer;
`;
export const LongDefaultBtn = styled.div`
  width: 100%;
  height: 50px;
  background-color: #030213;
  color: #f3f3f3;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 10px 5px;
`;

export const BottomNav = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 80px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: calc(100% - 40px);
  & > div {
    text-align: center;
  }
  & > :hover {
    text-align: center;
  }
`;

export const TabBar = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  text-align: center;
  justify-content: center;
  border-radius: 116px;
  align-items: center;
  background: #e2e2e6ff;
`;

// tabbar가 눌렸을 때
export const TabBtn = styled.h4<{ tabState: boolean }>`
  display: block;
  width: 50%;
  height: 40px;
  text-align: center;
  line-height: 45px;
  margin: 5px;
  border-radius: 20px;
  background-color: ${({ tabState }) => (tabState ? "#FFF" : "#e2e2e6ff")};
  text-decoration-color: black;
`;
export const CircleBtn = styled.div`
  width: 80px;
  height: 80px;
  color : #fff;
  background-color: #a855f7;
  border-radius: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom:30px;
  right:30px;
  cursor:pointer;
  // 왜 화면 바깥까지 따라오지?
`;

export const Box = styled.div`
  // 나눠놓기 박스
`;

export const IconBox = styled.div`
  width: 100%;
`;

export const Avartar = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9333ea;
  border-radius: 50%;
  color: #fff;
  margin-right: 10px;
`;
export const UserName = styled.div``;
export const Title = styled.h3``;
// 일기카드 컴포넌트 =========================================
export const CardWrapper = styled.div`
  width: 400px;
  max-height: 210px;
  border-radius: 15px;
  background-color: #fff;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px;
`;
export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const CardState = styled.div`
  display: flex;
  text-align: left;
`;
export const EmotionImg = styled.div<{ EmotionIMGState: string }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 10px;
  ${({ EmotionIMGState }) => {
    switch (EmotionIMGState) {
      case "happy":
        return `
                background-color: #fde68a;
                color: #d97706;
                `;

      case "lovely":
        return `
                background-color: #FBCFE8;
                color: #DB2777;
                `;
      case "exsitet":
        return `
                background-color: #E9D5FF;
                color: #9333EA;
                `;
      case "nomal":
        return `
                background-color: #E5E7EB;
                color: #6B7280;
                `;

      case "sad":
        return `
                background-color: #BFDBFE;
                color: #2563EB;
                `;
      case "angry":
        return `
                background-color: #FECACA;
                color: #DC2626;
                `;

      default:
        break;
    }
  }}
`;
export const EmotionImg_State_Smile = styled(CiFaceSmile)`
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardDate = styled.p`
  margin: 0;
  padding: 0;
  color: #9ca3af;
`;
export const EmotionState = styled.p`
  margin: 0;
  padding: 0;
`;
export const CradInteraction = styled.div`
  display: flex;
  gap: 15px;
`;
export const Sujung = styled(FaPen)`
  margin: 0;
  padding: 0;
  height: 100%;
`;
export const Kill = styled(LiaTrashAlt)`
  margin: 0;
  padding: 0;
  width: 25px;
  height: 100%;
  color: red;
`;
export const CardTextArea = styled.div`
  height: 100px;
  width: 100%;
  text-align: left;
  margin: auto;
`;

// ========================================================================

export const PostBoxTop = styled.div`
  text-align: left;
`;
export const PostTextArea = styled.div`
  text-align: left;
`;
export const PostBoxBottom = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
`;
export const Like = styled.div``;
export const Hits = styled.div``;

// ================================
export const CommentCard = styled.div`
  width: 100%;
  max-width: 430px;
  height: cacl(100vh - 80px);
  background-color: #fff;
  border-radius: 15px;
  margin: 15px;
  padding-right: 5px;
`;
export const WriteCommentArea = styled.div`
  width: 100%;
  padding: 15px;
  text-align: left;
`;
export const CommentsTextAtra = styled.textarea`
  width: 100%;
  max-width: 400px;
  height: 100px;
  resize: none;
  border-radius: 15px;
  padding-top: 10px;
  padding-left: 10px;
`;
export const CommentsSubmitBtn = styled.div`
  width: 60px;
  height: 25px;
  background-color: #030213;
  color: #f3f3f3;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 10px 5px 10px 5px;
  padding: 5px;
`;
export const CommentsTopArea = styled.div`
  width:400px;
  display: flex;
  justify-content: space-between;
  margin: 0px 15px 0px 15px;  
`;

export const ReadCommentArea = styled.div``;

export const PostDetailTopBox = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px;
`;
export const PostDetailTextBox = styled.div``;

// ==================================================
export const Comment = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 15px;
  margin: 15px;
  padding: 10px;

`;
export const InfoOfCommtent = styled.div`
  display: flex;
`;
export const ReadCommentsAtra = styled.div`
  text-align: left;
  margin: 5px 0px 5px 10px;
`;
export const MoreCommtentBtn = styled.div`

  width: 60px;
  height: 25px;
  color: #030213;
  border-radius: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-top: 5px;
  margin-right: calc(100% - 70px);
`;
