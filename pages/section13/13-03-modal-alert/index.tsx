import { Modal } from "antd";
import { useState } from "react";
//useState 쓰려면 꼭 import 하자.

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
//눈에 보이지 않을 뿐 모달 창이 존재한다. 상태함수로 가시성을 통제한다. 

  const showModal = (): void => {
    setIsOpen(true);
  };
  const handleOk = (): void => {
    setIsOpen(false);
  };
  const handleCancel = (): void => {
    setIsOpen(false);
  }; //함수 컴포넌트 안의 메서드들은 Modal에서 제공.

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>

      <Modal
        title="모달 제목"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력: <input type="password" />
        주소 창: 
      </Modal>
    </>
  );
}
