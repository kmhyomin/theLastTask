import React from "react";
import HappyIcon from "../assets/imgs/행복해요.svg?react";
import LoveIcon from "../assets/imgs/사랑스러워요.svg?react";
import JoyIcon from "../assets/imgs/신나요.svg?react";
import NormalIcon from "../assets/imgs/평범해요.svg?react";
import SadIcon from "../assets/imgs/슬퍼요.svg?react";
import AngryIcon from "../assets/imgs/화나요.svg?react";
//그냥 svg 파일인데 어떻게 import 하는것임?
// ?react라는 라는 구문이 vite한테 React 컴포넌트로 변환해줘~ 라고함.
// 그 결과 SVG를 컴포넌트로 쓸 수 있게 된것임.

export interface EmotionType {
  id: string;
  label: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  color : string;
}
export const EMOTIONS: EmotionType[] = [
    {id :"happy", label: "행복해요" , icon: HappyIcon, bgColor: "#FEF9C2" , color : "#D08700"},
    {id :"love", label: "사랑스러워요" , icon: LoveIcon, bgColor: "#FCE7F3" , color : "#E60076"},
    {id :"joy", label: "신나요" , icon: JoyIcon, bgColor: "#F3E8FF" , color : "#9810FA"},
    {id :"nomarl", label: "평범해요" , icon: NormalIcon, bgColor: "#4A5565" , color : "#F3F4F6"},
    {id :"sad", label: "슬퍼요" , icon: SadIcon, bgColor: "#DBEAFE" , color : "#155DFC"},
    {id :"angry", label: "화나요" , icon: AngryIcon, bgColor: "#FFE2E2" , color : "#E7000B"},
];