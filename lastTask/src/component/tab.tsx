import { Link } from "react-router-dom";
import '../css/tab.css';

type tabProps ={
    pageLink1 : string;
    pageLink2 : string;
    pageName1 : string;
    pageName2 : string;
}
// Link에도 props 넣을 수 있다길래 props 로 바꾸니 범용성이 더 높아졌다.
function Tab( {pageLink1, pageLink2, pageName1, pageName2 } : tabProps){
    return (
        <div className="tabBar">
            <h4> <Link to={pageLink1}>{pageName1}</Link></h4>
            <h4> <Link to={pageLink2}>{pageName2}</Link></h4>
        </div>
    );
}

export default Tab;



// vv 원래 코드
// import { Link } from "react-router-dom";
// import '../css/tabForDiary.css';
// function Tab(){
//     return (
//         <div className="tabBar">
//             <h4> <Link to="/diary">일기목록</Link></h4>
//             <h4> <Link to="/diary-report">감정 통계</Link></h4>
//         </div>
//     );
// }

// export default Tab;