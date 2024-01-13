//new
import { Fragment } from "react";

import BoardComponent from "../../../src/components/units/board/09-board-component";

export default function BoardNewPage() {
  return <BoardComponent isEdit={false} />;
  //키가 필요없을 때는 fragment를 생략하고 마크업만 작성한다.
}

//name="수정" , "작성" 보다 나은 방법.
