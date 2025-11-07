import { Link } from "react-router-dom"
import { BottomNav } from "./global_style";
function Bottomnav(){
    return(
        <BottomNav>
          <div> <Link to="/diary"> <h4>일기이아콘</h4> 일기 </Link> </div>
          <div> <Link to="/community"> <h4>커뮤니티 아이콘</h4> 커뮤니티</Link> </div>
          <div> <Link to="/my_page"> <h4>마이페이지 아이콘</h4> 마이 페이지</Link> </div>          
        </BottomNav>
    )
}

export default Bottomnav;