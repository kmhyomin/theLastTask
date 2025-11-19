import { Link } from "react-router-dom";
import {
  PostDetailTextBox,
  PostDetailTopBox,
  Title,
  Box,
  CardDate,
  CardWrapper,
  PostBoxTop,
  Avartar,
  UserName,
  CardState,
  PostTextArea,
  WriteCommentArea,
  CommentsTextAtra,
  CommentsSubmitBtn,
  CommentCard,
  DefaultBtn,
  Like,
  CountComtents,
  LikeBox,
  TopBox,
} from "../component/global_style";
import Comments from "../component/comments";
import { FaArrowLeft } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";

function PostDetail() {
  return (
    <>
      <PostDetailTopBox>
        <Link to="/community">
          <FaArrowLeft />{" "}
        </Link>
        {/* 링크 잘 닫았는데 왜 포인터가 뜨징 */}
        <div>게시물</div>
      </PostDetailTopBox>

      <PostDetailTextBox>
        <CardWrapper>
          <PostBoxTop>
            <CardState>
              <Avartar>김</Avartar>
              <Box>
                <UserName>김민지</UserName>
                <CardDate>2025년 06월 25일</CardDate>
              </Box>
            </CardState>
            <Title>오늘 정말 행복한 하루였어요🌟</Title>
            {/* 여기에 location으로 삼항 연산자 쓸 수 있을 듯 */}
          </PostBoxTop>

          <PostTextArea>
            Lorem ipsum dolor sit amet clor possimus neque saepe nam et
            perferendis qui nisi error illo, odio libero.
          </PostTextArea>
          <TopBox>
            <CountComtents> <FaCommentDots /> 4</CountComtents>
            <LikeBox>❤️ 3</LikeBox>
          </TopBox>
        </CardWrapper>
      </PostDetailTextBox>

      <CommentCard>
        <WriteCommentArea>
          <h4> 댓글 </h4>
          <CommentsTextAtra placeholder="댓글을 입력하세요..."></CommentsTextAtra>
          <CommentsSubmitBtn>작성</CommentsSubmitBtn>
        </WriteCommentArea>
        <Comments />
      </CommentCard>
    </>
  );
}

export default PostDetail;
