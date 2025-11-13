import { Link } from "react-router-dom"
import { BottomNav, IconBox } from "./global_style";
import { LuBookHeart } from "react-icons/lu";
import { BsPeople } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
function Bottomnav(){
    return(
        <BottomNav>
          <div> <Link to="/"> <IconBox><LuBookHeart /></IconBox> 일기 </Link> </div>
          <div> <Link to="/community"> <IconBox><BsPeople /></IconBox> 커뮤니티</Link> </div>
          <div> <Link to="/my_page"> <IconBox><BsPerson /></IconBox> 마이 페이지</Link> </div>          
        </BottomNav>
    )
}

export default Bottomnav;