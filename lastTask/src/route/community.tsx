import Btn from "../component/button";
import { CircleBtn, CommentsTopArea } from "../component/global_style";
import Post from "../component/post";
import { SlMagnifier } from "react-icons/sl";
import { LuNotebookPen } from "react-icons/lu";

function Community() {
  return (
    <>
      <CommentsTopArea>
        <h4>커뮤니티</h4>
        <h4> <SlMagnifier /> </h4>
      </CommentsTopArea>
      
      <Post />
      <Post />
      <Post />
      
      <CircleBtn>
        <Btn icon = {<LuNotebookPen />} text="" />
      </CircleBtn>
    </>
  );
}

export default Community;
