import { useState } from "react";
import { Box, CradInteraction, CardDate, CardState, CardTextArea, CardWrapper, EmotionImg, EmotionImg_State_Smile, EmotionState, Kill, Sujung, TopBox } from "./global_style";
function Emotioncard(){
    const [E_State,setEmotionState] =useState("happy");
    
    return(
        <CardWrapper>
            <TopBox>
                <CardState>
                    <EmotionImg EmotionIMGState = {E_State} ><EmotionImg_State_Smile /></EmotionImg>
                    <Box>
                        <CardDate>2025년 11월 11일</CardDate>
                        <EmotionState>행복해요</EmotionState>
                    </Box>
                </CardState>
                <CradInteraction>
                    <Sujung></Sujung>
                    <Kill></Kill>
                </CradInteraction>
            </TopBox>

            <CardTextArea>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, recusandae quibusdam. Cupiditate quam aut hic dolorem error minus perspiciatis </CardTextArea>
        </CardWrapper>
    ) 
}

export default Emotioncard;