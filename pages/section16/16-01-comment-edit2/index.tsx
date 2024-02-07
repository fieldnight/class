//08-02 DB 주소 변경 : ( 08:example => 15: practice)
//pagination 제거, 수정 버튼 클릭 => 인풋 창으로 전환 (useState 초기값 배열 설정: 동시에 여러개 가능)
//spread 연산자 (얕은복사) 응용

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
// number => id 변경

export default function StaticRoutedPage() {
  const [editIndex, setEditIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    const editNum = [...editIndex]; //중요!!! 스프레드 연산자 - 얕은 복사 필요!! 
    editNum[event.currentTarget.id] = true;
    setEditIndex(editNum);
  };

  console.log("data", data?.fetchBoards);
  const myStyles = { margin: "10px", padding: "10px 0" };

  return (
    <div>
      {data?.fetchBoards.map((el, index) =>
        editIndex[index] === false ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el._id}번 게시물 </span>
            <span style={myStyles}>제목: {el.title}</span>
            <span style={myStyles}>작성자: {el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <div>
            {" "}
            <input style={{margin:"5px", padding:"0 50px"}} type="text" />
          </div>
        )
      )}
    </div>
  );
}

/*
1. pagination SETTING 
   el._id가 없다는 에러가 뜬다. TS codeGen의 참조 주소가 기존 example로 되어 있기에 practice fetchBoard의 바뀐 요소를 인식하지 못함. TS로 인해 에러를 찾을 수 있었다. 

2.
  apollo파일. TS의 codeGen.yaml의 스키마 주소 변경! => package.json을 참조하여 yarn generate 실행 시 바뀐 주소로 QL 코드젠이 새로 다운받음

* 
  맵으로 화면을 그릴 경우 반드시 key를 사용해 세트로  묶어라.리엑트는 맵을 이용 할 경우 자체적으로 효율을 찾는 로직이 실행된다. 리엑트의 논리대로면 체크박스가 해당 열 span들과의 연관도가 낮아진다. 그래서 둘 사이에 고유한 값(겹치지 않는 값)을 key=value로 지정해서 react에게 이 둘이 짝임을 알려준다.
        

* JSX el타입 에러:
   useQuery<Pick<IQuery, "fetchBoards"> : fetch boards의 결과 타입, 인자(variables타입) => 개별 객체인 el의 타입도 따라서 지정된다.
  
*/
