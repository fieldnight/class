import { ChangeEvent, MouseEvent } from "react";



export interface IBoardWriteProps {
    //함수는 타입추론이 안된다
    isEdit: boolean;
    data?: any; //모든 타입. 임시로 쓴다
  
    //만약 data: any로 작성 시 props의 매개변수에는 isEdit과 data가 필수로 들어가야 함으로 new, edit에 각각 하나씩만 들어가는 우리 코드와 맞지 않다. 따라서 ?를 추가한다. isEdit의 경우 명시되지 않은 new에서는 false로 저장된다.
  }

export   interface IMyVariables {
    number: number;
    writer?: string;
    title?: string;
    contents?: string;
  }



export interface IBoardUIProps{
    submit: (event : MouseEvent<HTMLButtonElement>)=> void
    update :(event :MouseEvent<HTMLButtonElement>)=> void
    onChangeWriter: (event : ChangeEvent<HTMLInputElement>)=> void
    onChangeTitle :(event : ChangeEvent<HTMLInputElement>)=> void
    onChangeContents: (event : ChangeEvent<HTMLInputElement>)=> void
    isEdit: boolean
    data?: any
  }
  