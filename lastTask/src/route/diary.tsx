import Btn from "../component/button";
import { DefaultBtn } from "../component/global_style";
import Tab  from "../component/tab.tsx";
function Diary() {
  return (
    <>
      {/* 자기 안에 본인을 랜더링하는 Router를 넣으면 안된다. -> 무한 랜더링 해서 */}
      <h1>DIARY</h1>
      <Tab 
        pageLink_First ={"/diary"}
        pageLink_Second ={"/diary-report"}
        pageName_First ={"일기 목록"}
        pageName_Second ={"감정 통계"}

      />
      <DefaultBtn>
        <Btn icon="+" text="일기쓰기" />
      </DefaultBtn>
      <DefaultBtn>
        <Btn icon="+" text="일기쓰기" />
      </DefaultBtn>
    </>
  );
}

export default Diary;
