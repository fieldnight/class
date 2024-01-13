const FRUITS=[
    {number:1, title:'레드향'},  {number:2, title:'설향딸기'},  {number:3, title:'코코넛'},  {number:4, title:'키위'},  {number:5, title:'애플망고'},  {number:6, title:'멜론'},  {number:7, title:'수박'},  {number:8, title:'복숭아'},  {number:9, title:'무화과'},  {number:10, title:"과일선물세트"},
];

//배열인 FRUITS를 MAP을 이용하여 <div></div>형식으로 만들자. 
//컴포넌트는 state 함수가 있을때마다 리렌더링이 되서 같이 있는 변수와 함수도 새로고침된다. 캄포넌트 안에 해당 배열이 있을 경우 비효율적이라 바깥에 빼놓은 것이다.  

export default function MapFruitsPage(){
    const aaa = [<div>1. 레드향</div>, <div>2. 설향딸기</div>,<div>3. 코코넛</div>]

const bbb = FRUITS.map (el => <div>{el.number} {el.title}</div>)

    return (<><div>{aaa}</div>
    <div>{bbb}</div>
    
    {FRUITS.map(el=><div>{el.number} {el.title}</div>)}
    </>)//실무에서 효율적인 렌더링 예제 
}