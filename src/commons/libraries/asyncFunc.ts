import { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => {
  void asyncFunc();
};

export const wrapFormAsync =
  (asyncFunc: () => Promise<void>) => (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void asyncFunc();
  };

//event 부분에 FormEvent 말고도 다른 여러가지가 들어와야하니 wrapFormAsync를 따로 구분한다
