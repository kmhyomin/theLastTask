import { Link } from "react-router-dom";
import {
  PostBoxBottom,
  Title,
  Box,
  CardDate,
  CardWrapper,
  PostBoxTop,
  Avartar,
  UserName,
  CardState,
  PostTextArea,
  Like,
  Hits,
} from "./global_style";

function Post() {
  return (
    <CardWrapper>
      <Link to="/post-Detail">
        <PostBoxTop>
          <CardState>
            <Avartar>김</Avartar>
            <Box>
              <UserName>김민지</UserName>
              <CardDate>2025년 06월 25일</CardDate>
            </Box>
          </CardState>
          <Title>오늘 정말 행복한 하루였어요🌟</Title>
        </PostBoxTop>
        <PostTextArea>
          Lorem ipsum dolor sit amet clor possimus neque saepe nam et
          perferendis qui nisi error illo, odio libero.
        </PostTextArea>
        <PostBoxBottom>
          <Like> ❤️ 46 </Like>
          <Hits> 👁️ 255 </Hits>
        </PostBoxBottom>
      </Link>
    </CardWrapper>
  );
}

export default Post;
