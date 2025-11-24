import React from "react";
import styled from "styled-components";
import { EmotionCard } from "../components/mocules/EmotionCard";
import { HappyIcon } from "../assets/imgs/EmotionIcons/HappyIcon";

const ListWapper = styled.div`
    padding: 20px;
    overflow-y: auto;
    height: 100%;
`;

export const DiaryList = () =>{
    const handleEdit = () => alert('수정기능 추가 예정');
    const handleDelete = () => alert('삭제기능 추가 예정');
    
    return(
        // <ListWapper>
        //     <EmotionCard 
        //         emotionText= "행복해요"
        //         emotionIcon = {<HappyIcon />}
        //         createAt="2025-11-23"
        //         onDelete={handleDelete}
        //         onEdit={handleEdit}
        //         diaryContent="동해물과 백수산이 마르고 닳도록 하느님이 보우하사 우리나라 만세"
        //     />            
        // </ListWapper>
        <h1>안녕하세요오오!</h1>
    )
}