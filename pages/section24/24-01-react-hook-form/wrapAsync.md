## wrapAsync 사용 시 주의점

wrapAsync를 사용할 경우 submit을 하면 새로고침과 동시에 입력된 내용이 사라진다.

### 이유: 
사실 form의 onSubmit=" "에는 작성자, 내용, 제목,주소를 백엔드로 전송하기 위해 해당 백엔드 api주소를 담는다.  

이때 onSubmit 안의 내용을 실행시키면, 실행과 동시에 어떤 페이지로만 이동하려 한다. 백엔드 페이지가 아닌데, 백엔드 페이지로 착각하면서!

### 작동원리: 
wrapAsync로 handleSubmit(onClickSubmit) 할 경우, wrapAsync=()=>()의 두 괄호에 handleSubmit(...)과 event가 차례로 들어온다. 

### 해결 방법: 
이때 뒤쪽 괄호에 들어오는 event는 onSubmit으로부터 온 이벤트이기 때문에 페이지를 이동하려는 성질이 있다. 이 기본적인 기능을 막기 위해 asyncFunc 함수에 event.preventDefault를 추가한다. 