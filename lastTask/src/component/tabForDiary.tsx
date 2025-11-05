import { Link } from "react-router-dom";

function Tab(){
    return (
        <div className="tabBar">
            <h4> <Link to="/diary">일기목록</Link></h4>
            <h4> <Link to="/diary-report">감정 통계</Link></h4>
        </div>
    );
}

export default Tab;