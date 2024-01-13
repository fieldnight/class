/*데이터 삭제 예제 코드
1. 데이터 삭제 로직
2. 백그라운드의 상태와 화면의 동기화 (refetchQueries 사용) 
3. map에서 key를 써야 하는 이유 (react 자체 로직으로 인한 태그 연관성하락)
*/
import { useQuery, gql, useMutation } from "@apollo/client";
//API 중 GraphQL 은 CRUD(create, read, update, delete)를 2개의 명령어로 구현 가능한데, useQuery(조회) & useMutation(수정)이다.

import { Fragment } from "react";
//fragment는 페이지의 리턴값에서 요소들을 감싸는 바깥<></>요소에 태그를 붙일때 주로 사용한다. 기존의 <div></div>는 아무래도 요소를 하나 더 그려야 하기 때문에 렌더링 속도가 저하된다. 특별한 이유를 (예: 내부 요소가 span으로 이루어져있을 경우) 제외하고는 지양해라

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

//패치보드 데이터에서 가져올 내용들을 작성한다. 조화(query)

const DELETE_BOARD = gql`
  mutation deleteBoard($number:Int) 
  {  deleteBoard(number: $number) { 
   
       
      message
    }
    
  }
`;

/*
1. 삭제 기능의 (event) 부분에 타입이 int인 숫자를 지정한다.*
2. 변수로 다시 바꿔야하니 $쓰면 된다. 변수값을 받을 때는 해당 변수의 타입도 지정해야한다. */

/*GraphQL 쿼리에서 $number와 같이 $로 시작하는 부분은 변수(variable)를 나타냅니다. 이 변수는 쿼리나 뮤테이션을 실행할 때 동적으로 값을 전달할 수 있도록 하는데 사용됩니다. 이러한 변수를 사용하면 같은 쿼리 또는 뮤테이션을 여러 번 재사용하면서 다른 값들을 전달할 수 있습니다.

여기서는 deleteBoard 뮤테이션에 $number라는 변수를 정의하고 있습니다. 이 변수는 게시판에서 삭제하고자 하는 글의 번호를 나타냅니다. $number는 쿼리를 실행할 때마다 실제로 삭제하려는 글의 번호로 대체됩니다.

예를 들어, 실제로 이 뮤테이션을 실행할 때는 다음과 같이 $number에 특정한 숫자 값을 전달할 것입니다.

graphql
Copy code
mutation {
  deleteBoard(number: 123) {
    message
  }
}
이때 123은 삭제하려는 글의 번호로 대체됩니다. 따라서 $number를 사용함으로써 쿼리를 실행할 때마다 다른 글의 번호를 전달할 수 있게 되며, 이는 동적으로 데이터를 다룰 수 있게 해줍니다.
*/

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log("data", data?.fetchBoards);

  const myStyles = { margin: "50px", padding: "10px 0" };

  //페이지의 버튼에 달린 이벤트로, deleteBoard의 (event), int 타입의 변수 number에 target 의 id(해당 버튼 태그의 id로 el.number)를 넣는다. event.target.id의 event는 onClick 자체 이벤트.


  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    }); };
    
    /*API요청 날림 
   event.target 이 바로 태그. target.id는 html에서 가져왔기에 문자열. 숫자로 변환
  variables가 $. $number에 뒤에걸 보내준다. refetchQueries는 여러 상황을 동시에 리로드 할 수 있어서 S가 붙는다. 그래서 배열형식으로 API를 준다. 우리는 리패치받을 것이 패치보드 하나밖에 없지만.*/

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={el.number}>
          {/* 맵으로 화면을 그릴 경우 반드시 key를 사용해 세트로 묶어라. 

        리엑트는 맵을 이용 할 경우 자체적으로 효율을 찾는 로직이 실행된다. 리엑트의 논리대로면 체크박스가 해당 열 span들과의 연관도가 낮아진다. 그래서 둘 사이에 고유한 값(겹치지 않는 값)을 key=value로 지정해서 react에게 이 둘이 짝임을 알려준다.
        
        이 구간은 React JSX 주석 형태이다. */}
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px", padding: "10px 0" }}>
            {" "}
            {el.number}번 게시물{" "}
          </span>
          <span style={myStyles}>제목: {el.title}</span>
          <span style={myStyles}>작성자: {el.writer}</span>
          <span>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </span>
        </div>
      ))}
      {/*<div>1번 페이지 이동이 완료되었습니다.</div>
        <div>제목: {data?.fetchBoard?.title}</div>
        <div>작성자:{data?.fetchBoard?.writer}</div>
        <div>내용: {data ?data.fetchBoard?.contents :"로딩중...  "}</div>*/}
    </>
  );
}
