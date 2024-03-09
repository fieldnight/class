/*구조분해할당이란?

custom hook을 만들기 위해 알고 가야할 개념.

const ..[] = use~ : hook의 구조로써, 중간의 [],{} 가 구조분해할당이다. 



*/

const child ={
    name:"철수",
    age:13,
    school:"다람쥐초등학교"
}

const name = child.name;
const age=child.age
const school = child.school;

/*
와,
const {name, age, school} = child
가 동일하다. 
*/