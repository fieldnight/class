import { useQuery, gql, useMutation } from "@apollo/client";

import { Fragment } from "react";
//fragment는 페이지의 리턴값에서 요소들을 감싸는 바깥<></>요소에 태그를 붙일때 주로 사용한다. 기존의 <div></div>는 아무래도 요소를 하나 더 그려야 하기 때문에 렌더링 속도가 저하된다. 특별한 이유를 (예: 내부 요소가 span으로 이루어져있을 경우) 제외하고는 지양해라.  
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
//패치보드의 내용을 조회하는 단순 쿼리. 



const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;
//변수로 다시 바꿔야하니 $쓰면 된다. 변수값을 받을 때는 해당 변수의 타입도 지정해야한다.

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log("data", data?.fetchBoards);

  const myStyles = { margin: "10px", padding: "10px 0" };

  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    }); /*API요청 날림 */
  }; //event.target 이 바로 태그. target.id는 html에서 가져왔기에 문자열. 숫자로 변환
  //variables가 $. $number에 뒤에걸 보내줘.

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el.number}> 
        {/* 맵으로 화면을 그릴 경우 반드시 key를 사용해 세트로 묶어라. 

        리엑트는 맵을 이용 할 경우 자체적으로 효율을 찾는 로직이 실행된다. 리엑트의 논리대로면 체크박스가 해당 열 span들과의 연관도가 낮아진다. 그래서 둘 사이에 고유한 값(겹치지 않는 값)을 key=value로 지정해서 react에게 이 둘이 짝임을 알려준다.
        
        이 구간은 React JSX 주석 형태이다. */ }
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}번 게시물 </span>
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
    </div>
  );
}
