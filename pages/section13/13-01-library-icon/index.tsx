import { UpCircleOutlined } from "@ant-design/icons";
import { MouseEvent } from "react";
import styled from "@emotion/styled";
import { useState } from "react";   //MouseEvent와 같이 묶으면 안됨.. 
const MyIcon = styled(UpCircleOutlined)`
  color: red;
  font-size: 50px;
`;

/*import styled from "@emotion/styled";

export const RedInput = styled.input
` color: red;
box-shadow: 1px 1px 0.2 black;`

기존 형태의 JSX
 */

export default function LibraryIconPage(): JSX.Element {
  const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => { //마우스로 div 클릭했음
    console.log(`currentTarget: ${event.currentTarget.id}`);
    console.log(`target ${event.target.id}`); 
    
    /* target이 빈칸으로 뜨는 이유: 
    1. 버블링에 의해서 onClick 까지 올라가서 실행되긴 한다 
     2.이벤트가 실행된 최초의 태그는 브라우저 내에서 span과 svg(아이콘)으로 나누어진 후, id를 포함한 모든 메서드들이 span(클릭 불가)로 이동한다
     3. 내가 아무리 아이콘을 클릭해도 svg에는 ID가 없으므로 target.id를 가져오지 못한다. */
  };

  return (
    <div id="삭제할게시글ID" onClick={onClickDelete}>
      <MyIcon id="삭제할게시글Icon" />
    </div>
  );

  /*emotion과 CSS를 같이 써보자.  */
}
