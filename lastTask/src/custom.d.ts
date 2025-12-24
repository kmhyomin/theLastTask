// src/custom.d.ts

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.svg?react" {
  import React = require("react");
  // ?react가 붙으면 바로 리액트 컴포넌트가 됨을 명시
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}