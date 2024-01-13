import { useMutation, gql } from "@apollo/client";

const 내세팅 = gql`
  mutation {
    createBoard(writer: "미나리", title: "냠냠!!", contents: "재밋음!") {
      _id
      number
    }
  }
`;

export default function MutationPage() {
  const [나의함수] = useMutation(내세팅);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };

  //버튼을 누르면 버튼에 바인딩된 위의 함수가 실행. 백틱 사이 명령어 (내세팅)의 요청결과가 나의함수, result에 담긴다.
  return (
    <>
      <button onClick={onClickSubmit}>graphQL-API 요청하기!!</button>
    </>
  );
}

