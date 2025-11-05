import { Link } from "react-router-dom"

function Bottomnav(){
    return(
        <div className="bottomNav">
          <h4> <Link to="/diary">일기</Link> </h4>
          <h4> <Link to="/community">커뮤니티</Link> </h4>
          <h4> <Link to="/my_page">마이 페이지</Link> </h4>          
        </div>
    )
}

export default Bottomnav;