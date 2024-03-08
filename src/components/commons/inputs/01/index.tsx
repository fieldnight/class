import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
}

//props 부분에는 type과 register가 들어감. type에는 text 또는 password가 들어감. ?<= 의 뜻은 타입 속성이 없어도 된다는 뜻.

export default function Input01(props): JSX.Element {
  return <input type={props.type ?? "text"} {...props.register} />;
}

//타입 속성을 지정X => 기본값인 text로 설정. <= null 병합 연산자 
