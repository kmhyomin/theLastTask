export const EMOTION_COLORS:{[key : string] : string} ={
    '행복해요' : '#D08700', 
    '사랑스러워요' : '#E60076', 
    '신나요' : '#9810FA', 
    '평범해요' : '#4A5565', 
    '슬퍼요' : '#155DFC', 
    '화나요' : '#E7000B',
} as const;

export type EmotionType = keyof typeof EMOTION_COLORS;