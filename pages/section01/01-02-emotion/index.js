import { MyEmail,MyEmailInput } from "../../../styles/01-02-emotion";

export default function EmotionPage() {
  return (
    <div>
      <span>이메일: </span>
      <input type="text" />
      <button>클릭하세요! </button>
      <img src="/next.svg" />

      <MyEmail>'이메일을 입력하세요'</MyEmail> <MyEmailInput></MyEmailInput>
    </div>
  );
}
