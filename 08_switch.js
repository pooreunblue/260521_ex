// switch
const r = Math.random() * 10;
const r2 = Math.random() * 10;
switch (
    true // 이거랑 일치하는게 아니라 뒤에 오는 조건식으로 switch를 쓰겠다
) {
    case r > 9:
        console.log("r1이 9보다 큽니다");
    case r2 > 9:
        console.log("r2가 9보다 작습니다.");
        break;
    default:
        console.log("둘다 9보다 작습니다.");
}

const fruits2 = ["사과", "배", "오이"];
const o = {
    사과: "사과 좋아여",
    배: "배 싫어요",
};
const fruitIdx2 = Math.floor(Math.random() * fruits2.length);
const fruitKey = fruits2[fruitIdx2];
// 없는 키를 호출하면 undefined -> false
console.log(fruitKey, o[fruitKey] || "과일을 좀 드세요");
// || 를 default로 쓸 수 있음
console.log(fruitKey, o[fruitKey] ?? "과일을 좀 드세요");
// ?? : null, undefined일때 뒤에오는 값으로 표시