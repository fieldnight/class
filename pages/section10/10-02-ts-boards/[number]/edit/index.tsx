import { useRouter } from "next/router";

import { gql } from "@apollo/client";

import { useQuery } from "@apollo/client";

import BoardWrite from "../../../../../src/components/units/board/10-write/BoardWrite.container";

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

export default function GraphqlMutationPage(/*props*/) {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });

  /*게시글 수정 시 기존에 저장해왔던 데이터를 불러다가 화면에 띄워야 한다.

이때 데이터를 불러 올 곳으로 edit.js를 선택한다. 특정 게시글 (예; 3번)을 패치받아(패치보드 명령어를 통해 내려받아) props로 data에 저장 후 바로 presenter로 쏘아준다. 

defaultValue= { props.data.fetchBoard.title}*/

  return (
    <>
      <div>수정하기 페이지 입니다. </div>
      <BoardWrite isEdit={true} data={data} />
    </>
  );
}
