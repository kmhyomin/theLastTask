import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bottomnav from "./bottom_nav";
import Diary from "./route/diary";
import Community from "./route/community";
import MyPage from "./route/my_page";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/Diary" element={<Diary />}/>
            <Route path="/Community" element={<Community />}/>
            <Route path="/My_page" element={<MyPage />}/>
          </Routes>
          <Bottomnav />
        </BrowserRouter>
    </>
  );
}

export default App;
