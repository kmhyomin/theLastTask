import { Link } from "react-router-dom";
import '../css/tab.css';

type tabProps ={
    pageLink_F : string;
    pageLink_S : string;
    pageName_f : string;
    pageName_s : string;
}
// Link에도 props 넣을 수 있다길래 props 로 바꾸니 범용성이 더 높아졌다.
function Tab( {pageLink_F, pageLink_S, pageName_f, pageName_s } : tabProps){
    return (
        <div className="tabBar">
            <h4> <Link to={pageLink_F}>{pageName_f}</Link></h4>
            <h4> <Link to={pageLink_S}>{pageName_s}</Link></h4>
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