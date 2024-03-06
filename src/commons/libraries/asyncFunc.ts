import { FormEvent } from "react";

export const wrapAsync = (asyncFunc: () => Promise<void>) => (event:FormEvent<HTMLFormElement>) => {
  void asyncFunc();
};
