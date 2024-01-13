import { useRouter } from "next/router";
//next는 react의 업그레이드 버전이다.

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/section05/01static/05-01-static-routing-moved");
  };

  return (
    <>
      {" "}
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
