//08-02 DB 주소 변경 : ( 08:example => 15: practice)
//15-01 pagination에 < > 페이지 이동바 추가
import { useQuery, gql } from "@apollo/client";
import type { MouseEvent } from "react";
import { useState } from "react";
import type {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsCountArgs,
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

const FETCH_BOARDS_COUNT = gql`
  query {
    fetchBoardCount
  }
`;
//DB에서 이게 끝인 간단헌 데이터 가져와서 저장한다.

export default function StaticRoutedPage() {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT); //:로 data이름 변경, 일종의 State

  const lastPage = Math.ceil((dataBoardsCount?.fetchBoardsCount ?? 10) / 10); //undefined일 경우 Count를 10으로 변경

  console.log("data:", data, "fetchBoard:", data?.fetchBoards);
  console.log("count:", dataBoardsCount);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  const onClickPrevPage = (): void => {
    if (startPage === 1) return; //음수 페이지 막는 방법!
    setStartPage(startPage - 10);
    void refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (): void => {
    if (startPage + 10 >= lastPage) {
      setStartPage(startPage + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  const myStyles = { margin: "10px", padding: "10px 0" };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el._id}번 게시물 </span>
          <span style={myStyles}>제목: {el.title}</span>
          <span style={myStyles}>작성자: {el.writer}</span>
        </div>
      ))}

      <button onClick={onClickPrevPage} style={{ margin: "5px" }}>
        이전페이지
      </button>

      {new Array(10).fill(1).map(
        (_, index) =>
          /*index + startPage <= lastPage &&*/ (
            <button
              style={{ margin: "3px" }}
              key={index + startPage}
              id={String(index + startPage)}
              onClick={onClickPage}
            >
              {index + startPage}
            </button>
          )
        //ERROR: 조건부 렌더링 && 혹은 삼항연산자 ?(btn):(<span/>)
      )}
      <button onClick={onClickNextPage} style={{ margin: "5px" }}>
        다음페이지
      </button>
    </div>
  );
}
/*
1. pagination SETTING 
   el._id가 없다는 에러가 뜬다. TS codeGen의 참조 주소가 기존 example로 되어 있기에 practice fetchBoard의 바뀐 요소를 인식하지 못함. TS로 인해 에러를 찾을 수 있었다. 

2.
  apollo파일. TS의 codeGen.yaml의 스키마 주소 변경! => package.json을 참조하여 yarn generate 실행 시 바뀐 주소로 QL 코드젠이 새로 다운받음

* gql page: 
   {page:1} => refetch시에는 variables 생략 가능. 그리고 해당 내용을 변수를 통해서 fetchBoards에 들어가야 함 => page:$page <=에 저장. 

* 
  맵으로 화면을 그릴 경우 반드시 key를 사용해 세트로  묶어라.리엑트는 맵을 이용 할 경우 자체적으로 효율을 찾는 로직이 실행된다. 리엑트의 논리대로면 체크박스가 해당 열 span들과의 연관도가 낮아진다. 그래서 둘 사이에 고유한 값(겹치지 않는 값)을 key=value로 지정해서 react에게 이 둘이 짝임을 알려준다.
        

* JSX el타입 에러:
   useQuery<Pick<IQuery, "fetchBoards"> : fetch boards의 결과 타입, 인자(variables타입) => 개별 객체인 el의 타입도 따라서 지정된다.

* onClickPage refetch Number(): 
    id=".." 는 항상 text 형식이므로 refetch page에 넣기 위해 숫자로 변경 필요 

* {[1,2,3].map((el, index) :
    el에 숫자가 들어올 때 index에는 0~9번째의 자릿수가 들어간다. 결국 el = index+1 인것. el은 언더바 (_) 처리.  

     1. 
      {[1,2,3,4,5,6,7,8,9,10].map((el,index)=>(<button key={el} id={String(el)} onClick={onClickPage}>{el}</button>))}
      

    2. 
      {[1,1,1,1,1,1,1,1,1,1].map((_,index)=>(<button key={index+1} id={String(index+1)} onClick={onClickPage}>{index+1}</button>))}
    
    3.
     
      {new Array(10).fill(1).map((_,index)=>(<button key={index+1} id={String(index+1)} onClick={onClickPage}>{index+1}</button>))}
       
        
*/
