import React from "react";
import '../css/button.css';

//그냥 프롭을 받으려 하니 any 타입으로 빨간줄이 떠서 아예 타입을 정하기로 했다.
type btnProps = {
    icon : React.ReactNode;
    // React.ReactNode는 icon이 어떤 타입이든 화면에 표시될 수 있는 모든 타입이다.
    text : string;
}

function Btn( {icon , text} : btnProps ){
    return(
        <div className="btnBox">
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    )
}

export default Btn;