import { Link, useLocation } from "react-router-dom";
import { TabBar, TabBtn } from "./global_style";
import { use, useState } from "react";

type tabProps ={
    pageLink_First : string;
    pageLink_Second : string;
    pageName_First : string;
    pageName_Second : string;
}

// {clicked}:{ clicked : boolean} 

// Link에도 props 넣을 수 있다길래 props 로 바꾸니 범용성이 더 높아졌다.
function Tab({ pageLink_First, pageLink_Second, pageName_First, pageName_Second} : tabProps){
    
    // useState로 하면 토글이 페이지 랜더링 때문에 값이 초기화 되서 useLocation을 씀
    const location = useLocation();
    const isNullLim =location.pathname ===  pageLink_First;
    // 지금 있는 페이지가 맞는지 확인해서 bool처럼 쓰는거

    return ( 
        <TabBar >
            <TabBtn tabState = {isNullLim}> 
                <Link to={pageLink_First}>{pageName_First}</Link>
            </TabBtn>
            <TabBtn tabState = {!isNullLim}
            // 서로 상태를 다르게 하기 위해 한쪽에 부정을 줬다.
            > <Link to={pageLink_Second}>{pageName_Second}</Link>
            </TabBtn>
        </TabBar>
    );
}

export default Tab;