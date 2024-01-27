import { profile } from "console";

interface IProfile {
  name: String;
  age: Number;
  school: String;
  hobby?: String;
}


//1. Partial 타입 : 모든 타입이 ?: 로 
type aaa =Partial<IProfile>

//const age :IProfile = 12 이렇게 따로 할 필요가 없어진다고 했었나? 


//2. Required 타입 : 모든 타입이 : 로 
type bbb = Required<IProfile>


//3. Pick 타입 : 골라골라
type ccc = Pick< IProfile, "name" | "age">

//4. Omit 타입 : 특정 타입을 빠트린다
type ddd = Omit<IProfile, "School">

//5. Record 타입
type eee = "철수" | "영희" | "훈이" //Union 타입 : 합칩합
let child : String = "바나나" //철영훈바나나사과 다 됨
let child2 : eee ="영희" //철영훈 중에서만 가능

type fff = Record<eee, IProfile>



//6. 객체들의 키만 뽑아서 합집합으로 만드는 방법 (key Union)
type ggg = keyof IProfile //"name", "age", "school", "hobby" 



//7. Type과 interface의 차이 => 인터페이스의 경우 선언병합 가능 
interface IProfile {
    candy : number //선언병합으로 추가 
    //타입으로 만들면 두개 이상 합칠 수 없음 
}

//8.응용 - 타입이 iprofile에다 모든 타입이 ?:인 profile 만들기 
let profile : Partial<IProfile> ={
candy: 10

}