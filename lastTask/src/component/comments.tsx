import {
  Avartar,
  Comment,
  ReadCommentsAtra,
  InfoOfCommtent,
  MoreCommtentBtn,
  UserName,
  CardDate,
  Box,
} from "./global_style";

function Comments() {
  return (
    <Comment>
      <InfoOfCommtent>
        <Avartar>김</Avartar>
        <Box>
          <UserName>김민지</UserName>
          <CardDate>2시간 전</CardDate>
        </Box>
      </InfoOfCommtent>
      <ReadCommentsAtra>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad ex
        consectetur deserunt necessitatibus
      </ReadCommentsAtra>
      <MoreCommtentBtn>답글</MoreCommtentBtn>
    </Comment>
  );
}

export default Comments;
