// break
while (true) {
    if (Math.random() > 0.5) {
        console.log("동전 던지기 성공!");
        break;
    } else {
        console.log("동전 던지디 실패!");
    }
}

// continue
let w = 0;
while (w < 10) {
    w++;
    if (w % 2 == 0) {
        continue;
    }
    console.log(w, "홀수입니다");
}