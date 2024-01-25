import { useRouter } from "next/router";

import { gql } from "@apollo/client";

import { useQuery } from "@apollo/client";

import BoardWrite from "../../../../../src/components/units/board/09-write2/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      number
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage(props) {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });
//
  return (
    <>
      <div>수정하기 페이지 입니다. </div>
      <BoardWrite isEdit={true} data={data} />
    </>
  );
}
