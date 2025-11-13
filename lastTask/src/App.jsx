import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bottomnav from "./component/bottom_nav";
import Diary from "./route/diary";
import Community from "./route/community";
import MyPage from "./route/my_page";
import DiaryReport from "./route/diary-report";
import { Wrapper } from "./component/global_style";
import PostDetail from "./route/post_Detail";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Diary />} />
          <Route path="/diary-report" element={<DiaryReport />}></Route>
          <Route path="/community" element={<Community />} />
          <Route path="/my_page" element={<MyPage />} />
          <Route path="/post-Detail" element={<PostDetail />} />
        </Routes>
        <Bottomnav />
      </BrowserRouter>
    </Wrapper>
  );
}

// Route는 최상단에서 같이 관리하고 이동하고 싶을 땐 Link to로 이동한다.
// 왜냐하면 BrowserRouter는 최상단에 하나만 있어야하고, Route는 BrowserRouter안에서만 작동하기 때문이다.
export default App;
