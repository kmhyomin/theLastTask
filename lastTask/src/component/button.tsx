import React from "react";
import '../css/button.css';
// 얘 css 여기서 안 받았는데 어디서 받았지??
// diray.css에서 D_writingBtn로 받았뜸
// 아마도 버튼 색이나 길이는 다른데 한 컴포넌트로 같이 써야하니 그냥 페이지에서 className 주고 따로 작업 한듯

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