//08-02 DB 주소 변경 : ( 08:example => 15: practice)
//section16/16-01-comment-edit3 refactor with units/16-comment-Item :리스트 내 특정 댓글 수정 기능
//기존 컴포넌트에서 useState 초기값에 10개의 배열을 그리는 대신 => map의 특성을 이용, 컴포넌트 분리 후 useState 작성 =import=> 10개의 CommentItem 생성

import { useQuery, gql } from "@apollo/client";

import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";
import CommentItem from "../../../src/components/units/16-comment-item/index";

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
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );

  console.log("data", data?.fetchBoards);

  return (
    <div>
      {data?.fetchBoards.map(
        (
          el
          //map으로 뿌리기 때문에 commentItem이 10개가 생긴다. isEdit은 이름은 같지만 서로가 다 다른 독립변수이다. 내가 클릭한 컴포넌트의 isEdit만 true 변경된다. map 자체 (컴포넌트 껍데기)에서 관리했으면 useState의 초기상태를 배열로 10개 적어야 하는 불편함이 있었는데 컴포넌트로 분리하니, 해당 컴포넌트가 10개가 생기고, 각 컴포넌트마다 각 스테이트를 관리 => 유지보수 좋은 코드
        ) => (
          <CommentItem key={el._id} el={el} />
        ) //props.el을 위한 el={el}
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
