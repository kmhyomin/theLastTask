import { Link } from "react-router-dom";
import { TabBar } from "./global_style";
import { useState } from "react";

type tabProps ={
    pageLink_First : string;
    pageLink_Second : string;
    pageName_First : string;
    pageName_Second : string;
}

// {clicked}:{ clicked : boolean} 

// Link에도 props 넣을 수 있다길래 props 로 바꾸니 범용성이 더 높아졌다.
function Tab({ clicked,pageLink_First, pageLink_Second, pageName_First, pageName_Second} : { clicked : boolean} & tabProps){
    const [itsClicked, setItsClicked] = useState(false);
    
    const handleClick = () => {
        setItsClicked(!itsClicked);
    }

    return ( 
        <TabBar onClick={handleClick} clicked={itsClicked}>
            <h4> <Link to={pageLink_First}>{pageName_First}</Link></h4>
            <h4> <Link to={pageLink_Second}>{pageName_Second}</Link></h4>
        </TabBar>
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