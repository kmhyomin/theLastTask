import styled from "styled-components";
import Btn from "./button";
import { DefaultBtn } from "./global_style";
import { LuBookHeart } from "react-icons/lu";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  div > p:first-child {
    font-size: 20px;
  }
  div > p:nth-child(2) {
  }
`;
const Btnbox = styled.div`
  margin-left: 25%;
`;

function NoDiary() {
  return (
    <Wrapper>
      <div>
        <LuBookHeart size={100} color="#cba4efff"/>

        <p>아직 작성된 일기가 없습니다.</p>
        <p>첫번째 일기를 작성해보세요!</p>
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
