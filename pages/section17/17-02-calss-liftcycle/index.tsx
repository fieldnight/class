//리엑트에서 component class기능을 제공하는 중

import { Component } from "react";
import { Router } from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };
  //state 객체 안에 모든 state를 한번에 집어넣는다.
  componentDidMount(): void {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("변경 후 실행");
  }
  componentWillUnmount(): void {
    console.log("사라지기 전 실행");
    /*[ex]채팅방 나가기: [x]클릭 => 접속자 상태 변경 api BE에 전송=> 채팅방 나감*/
  }

  onClickMove = (): void => {
    void Router.push("/");
    // use로 시작하는 것은 모두 hook이고 함수형 컴포넌트에서만 사용 가능하다. class에선 사용 불가. 그냥 Router 사용
  };

  onClickCountUp(): void {
    this.hello = 456;
    this.setState({ count: 1 });

    //Component의 기능들을 상속받았기에 내가 정의하지 않은 기능들을 this.로 접근 가능.
  }

  render(): JSX.Element {
    //presenter , JSX
    return (
      <div>
        <button onClick={this.onClickMove}>나가기버튼!!</button>
      </div>
    );

    //class 컴포넌트 내부의 함수에 접근 할 경우 this 사용.
  }
}
