//08-02 DB 주소 변경 : ( 08:example => 15: practice)

import { useQuery, gql, useMutation } from "@apollo/client";
import { MouseEvent } from "react";
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

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;
//변수로 다시 바꿔야하니 $쓰면 된다. 변수값을 받을 때는 해당 변수의 타입도 지정해야한다.

export default function StaticRoutedPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  console.log("data", data?.fetchBoards);
  const myStyles = { margin: "10px", padding: "10px 0" };

  const onClickPage = (event: MouseEvent<HTMLButtonElement>): void => {
    void refetch({ page: Number(event.currentTarget.id) });
  };

  /*const onClickPage= async():Promise<void>=>{
    const Result =  await refetch({ page: 1});
   console.log(Result); //이때는 콘솔 정보를 위해 비동기를 사용 }
  */

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ margin: "10px" }}>{el._id}번 게시물 </span>
          <span style={myStyles}>제목: {el.title}</span>
          <span style={myStyles}>작성자: {el.writer}</span>
        </div>
      ))}



      {new Array(10).fill(1).map((_,index)=>(<button key={index+1} id={String(index+1)} onClick={onClickPage}>{index+1}</button>))}
      
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

*  맵으로 화면을 그릴 경우 반드시 key를 사용해 세트로 묶어라. 
   리엑트는 맵을 이용 할 경우 자체적으로 효율을 찾는 로직이 실행된다. 리엑트의 논리대로면 체크박스가 해당 열 span들과의 연관도가 낮아진다. 그래서 둘 사이에 고유한 값(겹치지 않는 값)을 key=value로 지정해서 react에게 이 둘이 짝임을 알려준다.
        

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


