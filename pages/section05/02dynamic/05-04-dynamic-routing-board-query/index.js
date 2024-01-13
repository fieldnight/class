import { useRouter } from "next/router";
//next는 react의 업그레이드 버전이다.

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push(
      "/section05/02dynamic/05-04-dynamic-routing-board-query-moved/1"
    );
  };

  const onClickMove2 = () => {
    router.push(
      "/section05/02dynamic/05-04-dynamic-routing-board-query-moved/2"
    );
  };

  const onClickMove3 = () => {
    router.push(
      "/section05/02dynamic/05-04-dynamic-routing-board-query-moved/3"
    );
  };
  return (
    <>
      <hr></hr>
      <div>다이나믹 라우터 홈페이지입니다. </div>
      <button onClick={onClickMove1}>1번 페이지</button>
      <button onClick={onClickMove2}>2번 페이지</button>
      <button onClick={onClickMove3}>3번 페이지</button>
    </>
  );
}
