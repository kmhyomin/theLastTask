import styled from "styled-components";
import Btn from "./button";
import { DefaultBtn } from "./global_style";

const Wrapper =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top:50px;
    
`;
const Btnbox = styled.div`
 margin-left : 25%;
`;

function NoDiary(){
    return(
        <Wrapper>
            <div>
                <h2>아직 작성된 일기가 없습니다.</h2>
                <h3>첫번째 일기를 작성해보세요!</h3>
                <Btnbox>
                <DefaultBtn>
                    <Btn icon="+" text="일기쓰기" />
                </DefaultBtn>


                </Btnbox>
            </div>
            
        </Wrapper>
    );
}

export default NoDiary; 