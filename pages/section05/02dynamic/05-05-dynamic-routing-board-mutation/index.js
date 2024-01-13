import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const 내세팅 = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function MutationPage() {
  const router = useRouter();

  const [나의함수] = useMutation(내세팅);
  const onClickSubmit = async () => {
    try {
      //try에 있는 내용을 시도하다가 실패하면, 아래의 줄들을 모두 무시하고, catch에 있는 줄로 넘어간다.

      const result = await 나의함수({
        variables: {
          //variables = $ !!!
          writer: "miner",
          title: "mini",
          contents: "123",
        },
      });
      console.log(result);
      console.log(result.data.createBoard.number);
      router.push(
        `/section05/02dynamic/05-05-dynamic-routing-board-mutation-moved/${result.data.createBoard.number}`
      );
    } catch (error) {
      alert(error.message);
    }
  };
  //버튼을 누르면 버튼에 바인딩된 위의 함수가 실행. 백틱 사이 명령어 (내세팅)의 요청결과가 나의함수, result에 담긴다.
  return (
    <>
      <button onClick={onClickSubmit}>graphQL-API 요청하기!!</button>
    </>
  );
}

//기존의 방식과 달라진 점: 요청헤더에 요청값을 바로 집어넣는 하드코딩을 한 대신 유저이용버튼에서 값을 전달해서 요청하는 패턴으로 변경
