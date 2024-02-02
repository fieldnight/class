import { Modal } from "antd";
import { useState } from "react";
//useState 쓰려면 꼭 import 하자.

import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";
//다음 우편번호 검색 서비스를 react에서 사용. 컴포넌트 임포트로 검색 서비스를 임베드 방식으로 사용

export default function ModalAlertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  //눈에 보이지 않을 뿐 모달 창이 존재한다. 상태함수로 가시성을 통제한다.

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    onToggleModal();
  };
  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>

      {/*   <Modal
        title="모달 숨기기(ex: 이력서)"
        open={true}
        onOk={onToggleModal}
        onCancel={onToggleModal}
      > 비밀번호 입력: <input type="password" placeholder="비밀번호"></input>
    
      </Modal>*/}

      {isOpen && (
        <Modal
          title="모달 삭제하기 (신용카드 , 비밀번호 등)"
          open={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
          {/* onComplete: 주소를 검색할 경우 실행되는 콜백함수입니다.  */}
        </Modal>
      )}
    </>
    /*정리: 첫번째 모달은 visible 상태를 open 속성으로 조정한다. 
두번째 모달은 open을 항상 true로 하는 대신, 팝업 창 버튼들을 클릭해 false로 바뀌면 해당 모달을 삭제하고, 다시 버튼을 눌렀을 때 showModal로 모달을 새로이 생성하는 방식이다.
false일 경우 조건부 랜더링을 통해 삭제하는 방식, state가 바뀌면 컴포넌트 전체가 리렌더링 하는 원리 이용 */
  );
}
