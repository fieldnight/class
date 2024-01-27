  import { useRouter } from "next/router";
import { IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types"; //: GraphQL 쿼리와 관련된 타입들을 가져옵니다.
const { gql, useQuery } = require("@apollo/client");

//1. 모듈 및 패키지 가져오기   

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

//2. GraphQL 쿼리 정의: FETCH_BOARD 상수에는 GraphQL 쿼리가 정의되어 있습니다. 이 쿼리는 number라는 변수를 받아서 해당 번호의 게시글 정보를 가져옵니다.

//GraphQL은 데이터를 서버로부터 효율적으로 가져오기 위한 쿼리 언어입니다. (GraphQL은 양방향 데이터 통신을 위한 쿼리 언어로서, 클라이언트와 서버 간의 효율적인 데이터 교환을 지원) 쿼리는 클라이언트가 어떤 데이터를 필요로 하는지를 서버에게 명시적으로 전달하는 방식을 정의합니다. 이것은 REST와는 다르게 클라이언트가 필요한 데이터의 구조와 양을 정확하게 지정할 수 있어 불필요한 데이터의 전송을 최소화할 수 있습니다.

//graphQL의 장점 - 선택적 필드, 중첩 구조, 변수 사용, 타입 시스템 (: GraphQL은 강력한 타입 시스템을 가지고 있습니다. 이는 서버가 제공하는 데이터의 유형을 정의하고, 클라이언트가 어떤 데이터를 기대할 수 있는지에 대한 명확한 정보를 제공합니다.)

export default function DynamicRoutedPage() {


  const router = useRouter(); // 현재 페이지의 라우터 정보를 얻기 위해 useRouter 훅 사용
  console.log(router);
  const { data } = useQuery<Pick<IQuery,"fetchBoard">,IQueryFetchBoardArgs>(FETCH_BOARD, { variables: { number: Number(router.query.qqq) } }); 
  
  //주소창에 들어가는 변수라서 문자인  상태. 숫자로 변경   

  //mutation과는 다르게 페이지 접속하자마자 정보를 받아와야하므로 useQuery 식에 (기존 onclick매서드 함수에 있던 내용을) 추가함.

  //3. 컴포넌트 정의 : DynamicRoutedPage 컴포넌트는 현재 페이지의 라우터 정보를 얻기 위해 useRouter 훅을 사용하고 있습니다. UseQuery 훅을 사용하여 GraphQL 쿼리를 실행하고, variables를 통해 쿼리에 필요한 변수를 전달합니다. 여기서 number 변수는 페이지의 qqq 쿼리 파라미터를 숫자로 변환하여 전달합니다. 

  console.log("data", data);

  return (
    <>
      <div>{router.query.qqq}쪽 페이지 이동이 완료되었습니다.</div>
      <div>제목: {data ?data.fetchBoard?.title : "로딩중.."} </div>
      <div>작성자:{data ?data.fetchBoard?.writer : "로딩중.." }</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  );

  //4.데이터 출력

  // 위 코드는 Next.js와 Apollo Client를 사용하여 동적으로 라우트된 페이지에서 GraphQL 쿼리를 수행하고, 그 결과를 화면에 렌더링하는 간단한 예제입니다.
}



