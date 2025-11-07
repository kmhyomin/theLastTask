import styled from "styled-components";

// 기본 버튼 =============================================================
export const DefaultBtn = styled.div`
    width: 150px;
    height: 50px;
    background-color: #030213;
    color: #f3f3f3;
    border-radius: 10px;
    margin: 5px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center
`;

// bottomNav =============================================================
export const BottomNav = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    height: 80px;
    background-color: #fff;
    border: 1px solid; /* 안보여서 임시로 */
    justify-content: center;
    align-items: center;
    & > div{
        text-align: center;
    }
    & > :hover{
        text-align: center;
    }
`;

// 탭 바 =====================================================
export const TabBar = styled.div< {clicked : boolean} >`
    display: flex;
    width: 100%;
    height: 50px;
    text-align: center;
    justify-content: center;
    border-radius: 116px;
    align-items: center;
    background-color: #ececf0;
    >h4{
        display: block;
        width: 50%;
        height: 40px;
        text-align: center;
        line-height: 45px;
        margin: 5px;
        border-radius: 20px;
        background-color: ${( ({clicked}) => clicked ? "#ececf0" : "#fff")};
        color: #030213;
    }
`;
// 커뮤니티의 동그란 글쓰기 버튼=============================================================
export const CircleBtn = styled.div`
    width: 80px;
    height: 80px;
    background-color: #A855F7;
    border-radius: 50%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`
// =======================================================================================