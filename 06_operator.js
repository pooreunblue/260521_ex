// 연산자 -> 1개 이상의 피연산자를 대상으로 변환, 계산 -> 그 결과값

// 산술연산자 (+, -, *, /, %)
// 숫자
console.log(1 + 2);
console.log(1-2);

console.log(1+"1") // 11,문자와 숫자가 만나면 둘 중에 하나가 형 변환 -> +는 문자열의 연산이 있으니 숫자가 문자열로 바뀜
console.log(1 + "1" * 1); // 2
console.log(2 * "2"); // 4
console.log(1 == "1"); // 1 -> "1" == "1"
// 일치 연산자 (형 변환을 하지 않는다)
console.log(1 === "1");
console.log(1 !== "1");

console.log(0 == "0");
console.log("" == 0);
console.log("" == "0");

// 논리 연산자
// 1개 이상의 값에 대해서 논리적 평가값(true, false)을 합성, 변환하는 연산자
// &&(and), ||(or), !(not)
console.log("----------");
const b1 = 100 > 10;
console.log(b1);
console.log(!b1);
const b2 = 50 < 20;
console.log(b2);
console.log(b1 && b2);
console.log(b1 || b2);

// 증감 연산자
console.log("---");
let x = 1;
x++;
console.log(x);
x--;
console.log(x);
console.log(x++);

// 삼항 연산자
console.log("---")
const age = 20;
console.log(age >= 20 ? "음주 가능": "음주 불가능")
console.log(age >= 20 ? "성인" : "미성년자")

