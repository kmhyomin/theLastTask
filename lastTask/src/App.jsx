import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bottomnav from "./bottom_nav";
import Diary from "./route/diary";
import Community from "./route/community";
import MyPage from "./route/my_page";
import DiaryReport from "./route/diary-report";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/diary" element={<Diary />} />
          <Route path="/diary-report" element={<DiaryReport />}></Route>
          <Route path="/community" element={<Community />} />
          <Route path="/my_page" element={<MyPage />} />
        </Routes>
        <Bottomnav />
      </BrowserRouter>
  );
}

// Route는 최상단에서 같이 관리하고 이동하고 싶을 땐 Link to로 이동한다.
// 왜냐하면 BrowserRouter는 최상단에 하나만 있어야하고, Route는 BrowserRouter안에서만 작동하기 때문이다.
export default App;
