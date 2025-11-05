import Btn from "../component/button";
import Tab from "../component/tabForDiary";
import "../css/diary.css";
function Diary() {
  return (
    <>
      {/* 자기 안에 본인을 랜더링하는 Router를 넣으면 안된다. -> 무한 랜더링 해서 */}
      <Tab />
      <h1>DIARY</h1>
      <div className="D_writingBtn"><Btn icon="+" text="일기쓰기" /></div>
      <div className="D_writingBtn"><Btn icon="+" text="일기쓰기" /></div>
    </>
  );
}

export default Diary;