import { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => () => {
  void asyncFunc();
};

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void asyncFunc();
  };

//특정 태그의 디폴트로 수행되는 값을 막는다. 여기서는 onSubmit의 페이지 이동 특성을 preventDefault로 막았다. =>esLint때문에 버튼 클릭시 해당 기능이 켜짐. 계속 사용할건지 고려해보자

//event 부분에 FormEvent 말고도 다른 여러가지가 들어와야하니 wrapFormAsync를 따로 구분한다
