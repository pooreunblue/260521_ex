// if

const age = 15;
// true, false
if (age >= 13) // 조건식
{
    console.log("중학생이다");
}

const score = Math.random() * 100;
console.log(score);

if (score < 90) {
    console.log("불합격");
}

else {
    console.log("합격");
}

if (score >= 80) {
    console.log("A");
} else if (score >= 60) {
    console.log("B");
} else if (score >= 40) {
    console.log("C");
} else {
    console.log("D")
}

// truthy, falsy
// 1. 조건문의 조건식 if (***) / 삼항연산자의 조건식(*** ? . : .)
// 2. 논리 연산자(!, &&, ||)

// 1. 비어있거나 정의되어있지 않다면 false
// - 길이(length)가 0이거나, null/undefined 같이 비어있음/정의되지 않음 -> false
// 2. 배열, 객체, 1개 이상의 문자를 포함한 문자열, 0이 아닌 모든 숫자는 true다.
// Boolean()
// ! (not) -> !!(boolean으로 변경된 값)
console.log(!!1); // true
console.log(!!-1); // true
console.log(!!0); // false