// JS -> 값을 분류. 적절한 대응 -> 타입(형) -> data type -> 자료형

const int = 1;
const int2 = -1;
const float = 1.01;
console.log(typeof int);
console.log(typeof int2);
console.log(typeof float);

// boolean
const t = true;
const f = false;
console.log(typeof t);
console.log(typeof f);

// string - 열
// 문자(1글자) -> 메모리 -> 메모리들을 연결시켜서 문자들의 집합/배열/나열 -> 문자배열
// 문자열 (String) -> "hello"
// JavaScript - 'h' 'Hello', -> 'hello', "hello"
const name = "윌";
console.log(typeof name);

// null
const n = null;
console.log(typeof n);

// undefined
let u;
console.log(typeof u);
let u2 = undefined;
console.log(typeof u2);
let u3 = {};
console.log(typeof u3.u);

// object
let o = {}; // 주소가 저장되는 타입
console.log(typeof o);
let arr = [];
console.log(typeof arr);

// 템플릿 리터럴
const nn = "김자바";
console.log(nn + "는 개발자이다");
console.log("대한민국에 사는 " + nn + "는 개발자이다");
console.log(`${nn}은(는) 개발자이다`); // 변수를 직접 (문자열 연결없이 넣을 수 있다)

console.log(`대한민국에 사는 ${nn}은 개발자이다.`);
console.log(`시작
    
    `)