import Btn from "../component/button";
import Emotioncard from "../component/emotioncard.tsx";
import { DefaultBtn, LongDefaultBtn } from "../component/global_style";
import NoDiary from "../component/noDiary.tsx";
import Tab  from "../component/tab.tsx";
function Diary() {
  return (
    <>
      {/* 자기 안에 본인을 랜더링하는 Router를 넣으면 안된다. -> 무한 랜더링 해서 */}
      <Tab 
        pageLink_First ={"/"}
        pageLink_Second ={"/diary-report"}
        pageName_First ={"일기 목록"}
        pageName_Second ={"감정 통계"}
      />
      {/* <LongDefaultBtn>
        <Btn icon="+" text="일기쓰기" />
      </LongDefaultBtn>
      <Emotioncard /> */}
    <NoDiary />
      

      

    </>
  );
}

export default Diary;
