import { useRouter } from "next/router";
import { styled } from "@emotion/styled";
const { gql, useQuery } = require("@apollo/client");

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

export default function DynamicRoutedPage() {
  const router = useRouter();
  console.log(router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  }); //주소창에 들어가는 변수라서 문자인  상태. 숫자로 변경

  //mutation과는 다르게 페이지 접속하자마자 정보를 받아와야하므로 useQuery 식에 (기존 onclick매서드 함수에 있던 내용을) 추가함.

  console.log("data", data);

  const onClickMove = () => {
    router.push(`/section09/09-03-boards/${router.query.number}/edit`);
  }; //[number]

  return (
    <>
      <div>{router.query.number}쪽 페이지 이동이 완료되었습니다.</div>
      <div>제목: {data ? data.fetchBoard?.title : "로딩중.."} </div>
      <div>작성자:{data ? data.fetchBoard?.writer : "로딩중.."}</div>
      <div>
        내용: {data?.fetchBoard?.contents}
        <br></br> <button onClick={onClickMove}>수정!하기 </button>
      </div>
    </>
  );
}
