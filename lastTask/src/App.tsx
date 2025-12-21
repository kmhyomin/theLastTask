import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BottomNavModule } from "./components/mocules/BottomNav";
import { NAV_ITEMS } from "./data/navItem";
import styled from "styled-components";
import DiaryLayout from "./components/organism/DiaryLayout";
import { DiaryList } from "./pages/DiaryList";
import { Community } from "./pages/Community";
import { DiaryReport } from "./pages/Diary-report";
import { MyPage } from "./pages/My_page";
import { PostDetail } from "./pages/Post_Detail";

const Container = styled.div`
    width: calc(100vw - 40px);
    height: calc(100vh - 40px);
    background: linear-gradient(135deg, #faf5ff 0%, #fdf2f8 50%, #eff6ff 100%);
    padding: 10px;
    text-align: center;
    margin: auto;
    overflow: hidden;
`;
function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DiaryLayout />}>
            <Route index element={<DiaryList />} />
            <Route path="diary-report" element={<DiaryReport />} />
          </Route>
          {/* TabBar 때문에 하나로 묶어뒀다 */}

          <Route path="/community" element={<Community />} />
          <Route path="/my_page" element={<MyPage />} />
          <Route path="/post-Detail" element={<PostDetail />} /> 
        </Routes>
        <BottomNavModule items={NAV_ITEMS} />
      </BrowserRouter>
    </Container>
  );
}

// Route는 최상단에서 같이 관리하고 이동하고 싶을 땐 Link to로 이동한다.
// 왜냐하면 BrowserRouter는 최상단에 하나만 있어야하고, Route는 BrowserRouter안에서만 작동하기 때문이다.

// 왜!!!! 흰 화면만 나와!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!왜!!!!!!!!!!!!!!!!!!!!!!!!!!
export default App;
