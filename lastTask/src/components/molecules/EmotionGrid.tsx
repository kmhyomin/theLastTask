import { useState } from "react";
import styled from "styled-components"
import { EMOTIONS } from "../../data/emotions";
import { EmotionItem } from "./EmotionItem";

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    width: 100%;
`;

export const EmotionGrid = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return(
        <>
            <GridContainer >
                {EMOTIONS.map((em) => {
                    const IconComponent = em.icon; //컴포넌트 형태로 할당할거임
                    return(
                        <EmotionItem 
                            key={em.id}
                            label={em.label}
                            icon = {<IconComponent />}
                            bgColor={em.bgColor}
                            color={em.color}
                            isSelected={selectedId === em.id}
                            onClick={() => setSelectedId(em.id)}                        />
                    )
                })}
            </GridContainer>
        </>
    )
}