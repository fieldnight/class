import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    margin: auto;
    box-sizing: border-box;
  }



 /* @font-face {
    font-family: "myFont";
    src: url("/font/...ttf");}*/
  
`;

//fonts에 .ttf 형식 폰트를 넣는다. 

//각 컴포넌트의 styles 파일에 font-family:"myFont" => 커스텀한 폰트가 적용. 

/*
주의사항: 
1. 
각 페이지 방문 시 폰트 다운->적용 사용자에게 보여준다. 

이미지는 무조건 다운만, 폰트는 사전에 설정해둔 기본 폰트 나오다가 다운 완료 시 대체.

F.O.L.T. : Flash OF Invisible Text (다운 전 보여주지 않음)
F.O.U.T. : FLlash Of Unstyled Text (기존 폰트 있음)

작은 용량의 폰트 사용으로 다운속도 높이기 => 앞축률 높은 폰트 사용 

2.
Subset-Font : 경량화 폰트 => 잘 쓰이는 문자만 다루는 폰트 


3. Fallback-Font: 실패 시 대체 폰트
font-family: Merriweather, Impact, serif.. 
=> serif가 대체 폰트 


*/