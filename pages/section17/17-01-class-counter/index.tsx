//리엑트에서 component class기능을 제공하는 중

import { Component } from "react";
import { count } from "console";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };
  //state 객체 안에 모든 state를 한번에 집어넣는다.

  hello = 123;

  onClickCountUp(): void {
    this.hello = 456;
    this.setState({ count: 1 });

    //Component의 기능들을 상속받았기에 내가 정의하지 않은 기능들을 this.로 접근 가능.
  }

  render(): JSX.Element {
    //presenter , JSX
    return (
      <div>
        <button onClick={this.onClickCountUp}>버튼</button>
      </div>
    );

    //class 컴포넌트 내부의 함수에 접근 할 경우 this 사용.
  }
}
