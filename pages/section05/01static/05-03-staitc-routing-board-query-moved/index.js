import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 240) {
      number
      writer
      title
      contents
    }
  }
`;

//뮤테이션과 똑같이 gpl``으로 감싸서 변수에 담아주면 된다.
//그래 패치보드가 바로 db로 가서 result로 쏘아준다 했잖아. 동기비동기 문제. 
export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARD);

  console.log("data",data);

  return (
    <>
      <div>1번 페이지 이동이 완료되었습니다.</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>작성자:{data?.fetchBoard?.writer}</div>
      <div>내용: {data ?data.fetchBoard?.contents :"로딩중...  "}</div>
    </>
/*조건부렌더링: optional-chaining (오류 -> 빈칸)
fetchBoard오류: 우리가 화면을 렌더링 할 때 data는 아직 안들어와 있을 수 있습니다.
따라서 data가 있다면 다시 렌더링 할 수 있도록 옵셔널 체이닝( ' ? ')을 붙여 주었습니다. 
data&&data: 데이터가 있으면 화면에 띄우고 그렇지 않으면 빈칸으로 나타내라. 부재를 나타내는 방식이 (오류 -> 빈칸) 으로. 
마지막은 삼함연산자로서 data ?A :B 있으면 A, 없으면B.*/
  );
}

//JSX에서 js 변수 쓰려면 중괄호 {} 사용해야함

/*페이지가 위에서 아래로 실행되면서 useQuery를 보는 순간 요청이 날아간다. 따로 프론트에서 따로 지정할 데이터가 없으니.. 그래서 useQuery 에 setting을 바로 넣어주는 방식이다. 내 함수같은건 없다.   */


/*data에 값을 받아오기 전까지 동기 방식으로 코드러닝을 멈추기에는 비효율적이다. 실제로 const {data}=..를 받아오기 전에 아랫줄로 내려간다. 콘솔로그와 리턴값을 보여준 다음 데이터값이 변경된다. 
 <div></div>의 단순내용들은 일단 먼저 그려놓고(data:undefined), data에 값이 들어온 다음에 {}안의 값을 그린다.  */
 