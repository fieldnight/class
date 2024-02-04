import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
  //..
  //..
  //이와 수많은 주소들..
];

//1.특정 주소는 헤더를 보여주지 않는 코드

//2. router.asPath : 현재 주소를 담는 변수 => useRouter로 라우터를 객체화해서 router.asPath를 만들어서 위의 주소와 조건부 렌더링을 한다.

//3. 디폴트 컴포넌트 내부에 선언 시 해당 컴포넌트 리렌더 될때 함께 리렌도됨. 되도록이면 외부에 쓰자.

export default function LayOut(props: ILayoutProps): JSX.Element {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  //4. 주소마다 대조 < 배열 안에 포함되는지 확인

  const SideBarStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    height: "500px",
  };
  //위. JSX 의 스타일은 왜 {{}} 형식일까?

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {/*숨기는 게 없을 경우 헤더 보여줌*/}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={SideBarStyle}>
        <div style={{ width: "30%", backgroundColor: "orange" }}>
          사이드 바{" "}
        </div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
      {/*<layout>사이의 < component/> 자체가 props*/}
      <div>푸터</div>
    </>
  );
}
