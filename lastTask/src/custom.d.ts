// 예시: src/custom.d.ts 파일 내부에 존재 가능
declare module "*.svg" {
  import * as React from 'react';
  // SVG를 props를 받는 함수 컴포넌트로 선언
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  
  // 기본 export는 URL(문자열)로 처리되게 선언
  const src: string;
  export default src;
}